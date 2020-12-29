import { urlencoded } from "body-parser";
import { pbkdf2, pbkdf2Sync, randomBytes } from "crypto";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { AuthRole } from "../entity/AuthRole";
import { AuthUser } from "../entity/AuthUser";
import * as jwt from 'jsonwebtoken';

export class AuthController {
    private userAuthRepo = getRepository(AuthUser);
    private rolesRepo = getRepository(AuthRole)

    async getAll(req: Request, res: Response) {
        return (await this.userAuthRepo.find()).reverse;
    }

    /** user registration */
    async registerUser(req: Request, res: Response) {
        const requestBody = req.body

        const user = new AuthUser()
        user.firstName = requestBody.firstName;
        user.lastName = requestBody.lastName;
        user.username = requestBody.username;

        user.salt = randomBytes(16).toString('hex');

        user.passwordHash = pbkdf2Sync(requestBody.password, user.salt, 1000, 64, 'sha512').toString('hex')

        user.role = await this.rolesRepo.findOne({name: requestBody.role})

        const tryRegister = await this.userAuthRepo.save(user);

        if (tryRegister) {
            const successMessage = {
                "success": "user registered successfully"
            }

            return successMessage;
        } 
    }

    /** attept to sign in a user */
    async loginAttempt(req: Request, res: Response) {
        
        const requestBody = req.body;

        const user = await this.userAuthRepo.findOne({
            username: requestBody.username
        }, {
            relations: ['role']
        })

        if (user != null) {
            const salt = user.salt;

            const tryPass = pbkdf2Sync(requestBody.password, salt, 1000, 64, 'sha512').toString('hex')

            const isAdmin = user.role.name === 'system admin'
            const isShopAdmin = user.role.name === 'shop admin'
            if (tryPass === user.passwordHash) {
                const userInfo = {
                    'user': user.username,
                    'arm': user.role,
                    'isa': isAdmin ? true : false,
                    'issa': isShopAdmin ? true : false
                }
                const token = jwt.sign(userInfo, 'bf9cee3ec7e478010b09d82f1f1ee38ca44937c6548ac01ed8bf19ae49f6c811726c95a7234d0b641e8e4cf48a0ae4fc28a33123adf286d3b3ecce40d4c7f67220', {expiresIn: '5 days'})

                const authToken = {
                    "token": token
                }

                return authToken;
            } else {
                const error = {
                    "error": "wrong password, try again"
                }

                res.status(404);
                return error;
            }
        } else {
            const error = {
                "error": "wrong username, confirm your username"
            }

            res.status(404);
            return error;
        }
    }
}