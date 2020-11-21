import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Vehicle } from "../entity/Vehicle";
import { VehicleRoute } from "../entity/VehicleRoute";

export class VehiclesController {

    // initialize the vehicle repository
    private vehicleRepo = getRepository(Vehicle);
    private routesRepo = getRepository(VehicleRoute)

    /** get all available vehicles */
    async getAll(req: Request, response: Response) {
        const vehicles = await this.vehicleRepo.find()
        return vehicles;
    }

    /** add a new vehicle into the repository */
    async addnew(req: Request, response: Response) {
        const requestBody = req.body

        const vehicle = new Vehicle();

        vehicle.modelType = requestBody.modelType;
        vehicle.plateNumber = requestBody.plateNumber

        const addAttempt = await this.vehicleRepo.save(vehicle);

        if (addAttempt) {
            const successMessage = {
                "success": `vehicle ${addAttempt.modelType} added successfully`
            }

            return successMessage;
        }
    }

    async newRoute(req: Request, resp: Response) {
        const route = new VehicleRoute();
        route.name = req.body.name;
        route.region = req.body.region

        const addAttempt = await this.routesRepo.save(route);

        if (addAttempt) {
            const successMessage = {
                'success': `${addAttempt.name} route added successfully`
            }

            return successMessage;
        }
    }

    async getRoutes(req: Request, res: Response) {
        return this.routesRepo.find();
    }
}