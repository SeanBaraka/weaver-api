import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";
import * as cors from "cors";
import * as socketIO from 'socket.io';
import * as http from 'http'
import { AuthUser } from "./entity/AuthUser";
import { AuthRole } from "./entity/AuthRole";
import { pbkdf2Sync, randomBytes } from "crypto";

createConnection().then(async connection => {

    // create express app
    const app = express();
    

    app.use(bodyParser.json());

    let allowedHosts = ['http://localhost:4200', 'http://localhost', 'http://192.168.0.105']
    let corsOptionsDelegate = function(req, callback) {
        let corsOptions: cors.CorsOptions;
        if(allowedHosts.indexOf(req.header('Origin')) !== -1) {
            corsOptions = { origin: true }
        } else {
            corsOptions = { origin: false }
        }

        callback(null, corsOptions);
    }
    app.use(cors(corsOptionsDelegate))

    app.enable('trust proxy')

    // create an instance of an http server. this instance is passed to socket.io server
    // yes, the instalnce of httpserver is passed to our socket.io server.
    const httpServer = http.createServer(app); // an instance of httpserver using the express app

    // creaing a new socket io server instance.
    // ** this is where the magic happens, everytime.
    // and let the realtime data, start flowing...
    const io: socketIO.Server = new socketIO.Server(httpServer, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    })

    // here, we check if a new connection has been established.
    // the 'connection' event of the server..
    io.on('connection', (clientSocket: socketIO.Socket) => {
        console.log(`\n** We have a visitor over here. Their ID: ${clientSocket.id}`);
    })

    // send the socket io instance to all requests through the middleware pipeline
    // the middleware pipeline...
    app.use((req: any, res, next) => {
        req.io = io;
        // run through the next piece of middleware
        next();
    })

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // as we setup a server, lets create a user creation middleware.
    // This is important for the initial build of the application.
    const usersRepo = getRepository(AuthUser) // getting the users repository
    const rolesRepo = getRepository(AuthRole) // getting the user roles repository
    
    // a list of predefined roles
    const predefinedRoles = ["system admin", "shop admin", "operator", "driver", "driver assistant"];
    // check if roles exist in the database..
    const roles = await usersRepo.find();

    // this here is to store the roles once they have been created.
    if (roles.length < 1) {
        // if no roles are found at the database
        
        // create a series of roles from the predetermined rolenames
        predefinedRoles.forEach(async (roleName) => {
            const role = new AuthRole() // create a new role object
            role.name = roleName; // assign the rolename from the array of roles
 
            const saveRole = await rolesRepo.save(role) // save the roles
            // lets stop the execution for a second or two..
            if (saveRole.name == predefinedRoles[0]) {
                const users = await usersRepo.find(); // checking if any users exist in the database

                if(users.length < 1) {
                    // if what exists is an empty array of users...
                    // find a system administrator role in the database.
                    const systemAdminRole = await rolesRepo.findOne({
                        where: { 
                            name: predefinedRoles[0]
                        }
                    })

                    // create a new user, the system administrator if none exists.
                    let adminUser: AuthUser; // adminUser of type Authuser,, hehe,,, types..
                    adminUser = await usersRepo.findOne({
                        where: {
                            role: systemAdminRole 
                        }
                    })
                    // these lines above are just checking if an admin user exist,
                    // here we do what we have to do.. 
                    if (adminUser == null || adminUser == undefined) {
                        // if no admin user exists
                        adminUser = new AuthUser(); // create an instance of an auth user object
                        adminUser.firstName = "Sean"
                        adminUser.lastName = "Baraka"
                        adminUser.username = "sean"
                
                        const salt = randomBytes(16).toString('hex') // create a salt 
                        const passwordHash = pbkdf2Sync("Developer@1425", salt, 1000, 64, 'sha512').toString('hex'); // create a password hash from the salt

                        adminUser.salt = salt;
                        adminUser.passwordHash = passwordHash;
                        adminUser.role = saveRole;

                        await usersRepo.save(adminUser) // save the admin user and hope for the best

                    } 

                }
            }
        });

        console.log("\n** Default user roles have been created\n");
        console.log("** Default system administrator user has been created \n\n")

    }

    
    // start express server
    const port = 3010; // port number for the application
    httpServer.listen(port, () => {
            console.log(`Express server has started on port ${port}. Open http://localhost:${port}/ to see results`);
    })
   

}).catch(error => console.log(error));
