import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";
import * as cors from "cors";
<<<<<<< HEAD
import * as socketIO from 'socket.io';
import * as http from 'http'
=======
>>>>>>> 46c123b0d35ed46abc579a2c9faabee474fba3fc

createConnection().then(async connection => {

    // create express app
    const app = express();
    

    app.use(bodyParser.json());

    let allowedHosts = ['http://localhost:4200', 'http://localhost', 'http://192.168.0.105']
    let corsOptionsDelegate = function(req, callback) {
<<<<<<< HEAD
        let corsOptions: cors.CorsOptions;
=======
        let corsOptions;
>>>>>>> 46c123b0d35ed46abc579a2c9faabee474fba3fc
        if(allowedHosts.indexOf(req.header('Origin')) !== -1) {
            corsOptions = { origin: true }
        } else {
            corsOptions = { origin: false }
        }

        callback(null, corsOptions);
    }
    app.use(cors(corsOptionsDelegate))

<<<<<<< HEAD
    // create an instance of an http server. this instance is passed to socket.io server
    const httpServer = http.createServer(app);

    const io = new socketIO.Server(httpServer, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    })

    io.on('connection', (socket) => {
        console.log('a new user connected');
    })

    // send the socket io instance to all requests through the middleware pipeline
    app.use((req: any, res, next) => {
        req.io = io;

        // run through the next piece of middleware
        next();
    })

=======
>>>>>>> 46c123b0d35ed46abc579a2c9faabee474fba3fc
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

    // start express server
<<<<<<< HEAD
   httpServer.listen(3000, () => {
        console.log("Express server has started on port 3000. Open http://localhost:3000/ to see results");
   })

   
=======
    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/ to see results");
>>>>>>> 46c123b0d35ed46abc579a2c9faabee474fba3fc

}).catch(error => console.log(error));
