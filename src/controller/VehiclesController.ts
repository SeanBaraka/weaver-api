import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Vehicle } from "../entity/Vehicle";
import { VehicleReport } from "../entity/VehicleReport";
import { VehicleRoute } from "../entity/VehicleRoute";
import { VehicleRouteVehicle } from "../entity/VehicleRouteVehicle";
import { VehicleStockInfo } from "../entity/VehicleStockInfo";

export class VehiclesController {

    // initialize the vehicle repository
    private vehicleRepo = getRepository(Vehicle);
    private routesRepo = getRepository(VehicleRoute);
    private vehicleRouteRepo = getRepository(VehicleRouteVehicle)
    private vStockRepo = getRepository(VehicleStockInfo)
    private reportRepo = getRepository(VehicleReport);

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

    /** assign driver to vehicle */
    async addDriverToVehicle(req: Request, response: Response) {
        const driver = req.body.driver
        const vehiclePlate = req.body.vehicle
        const route = req.body.route

        const routeVehicle = new VehicleRouteVehicle();
        routeVehicle.driver = driver;
        routeVehicle.vehicle = vehiclePlate;
        routeVehicle.route = route;

        const attemptSave = await this.vehicleRouteRepo.save(routeVehicle);

        if(attemptSave) {
            const successMessage = {
                "success": "driver added to vehicle and assigned route"
            }

            return successMessage;
        }
    }

    /** record stock for a particular vehicle */
    async addStockToVehicle(req: Request, res: Response) {
        const plateNumber = req.body.vehicle; // get the vehicle from the request

        const vehicle = await this.vehicleRepo.findOne({
            where: {
                plateNumber: plateNumber
            }
        });

        if (vehicle == null) {
            const errorNotFound = {
                "error": "the requested vehicle could not be found"
            }
            res.status(404);

            return errorNotFound;
        }

        // get the stock items from the request array
        const stock = Array.from(req.body.stock);

        const vehicleStock = []
        stock.forEach(async (item: any) => {
            const vStock = new VehicleStockInfo()

            vStock.openingUnits = item.availableUnits;
            vStock.productName = item.productName;
            vStock.unitPrice = item.unitPrice;
            vStock.vehicle = vehicle

            const amount = item.availableUnits * item.unitPrice;

            vehicleStock.push(amount)

            await this.vStockRepo.save(vStock);
        })

        const totalStock: number = vehicleStock.reduce((a, b) => a + b, 0); 

        // create a vehicle report for whatever is happening here
        const report = new VehicleReport();
        report.stock = JSON.stringify(stock);
        report.vehicle = vehicle.plateNumber

        await this.reportRepo.save(report);


        const successMessage = {
            "success": `Date: ${new Date(Date.now()).toLocaleDateString()} vehicle ${vehicle.plateNumber} dispatched. Total Stock Carried KSH. ${totalStock.toLocaleString()}`
        }
        return successMessage;

    }

    /** an attempt to get all the vehicles that have already been dispatched */
    async vehiclesInRoute(req: Request, resp: Response) {
        return this.vehicleRouteRepo.find();
    }

     /** an attempt to get vehicles and their routes on a particular day */
     async vehicleInRouteByDay(req: Request, resp: Response) {
        const dateFilter: string = req.body.date;
         
        return (await this.vehicleRouteRepo.find()).filter(x => x.date.toISOString().split('T')[0] == dateFilter);
    }

    /** get stock reports */
    async getReport(req: Request, res: Response) {
        const stockRepos = await this.reportRepo.find();

        return stockRepos;
        
    }
}