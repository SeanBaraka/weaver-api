import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async getDrivers(req: Request, res: Response) {
        const drivers = await this.userRepository.find({where: {
            role: 'driver'
        }})
        return drivers;
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async hire(request: Request, response: Response, next: NextFunction) {
        const personnel = new User();
        personnel.firstName = request.body.firstName;
        personnel.lastName = request.body.lastName;
        personnel.idNumber = request.body.idNumber;
        personnel.role = request.body.role

        const hireAttempt = await this.userRepository.save(personnel);

        if (hireAttempt) {
            const successMessage = {
                'success': `${hireAttempt.firstName} ${hireAttempt.lastName} hired successfully`
            }

            return successMessage;
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}