import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Purchase} from "../entity/Purchase";
import {Product} from "../entity/Product";
import {Supplier} from "../entity/Supplier";

export class SupplierController{
    //initialize the repos to use her 

    private supplierRepo = getRepository(Supplier);


    async addSupplier(request: Request, response: Response){
        //create new supplier by giving out credentials needed
          const supplier = new Supplier()
          supplier.address = request.body.address;
          supplier.supplierName = request.body.supplierName;
          supplier.telephone = request.body.telephone;

          const addSupplier = await this.supplierRepo.save(supplier);

          if(addSupplier) {
              const successMessage = {
                  "success": `${supplier.supplierName} added successfully`
              }
  
              return successMessage;
          } else {
              const errorMessage = {
                  "error": "sorry, product not added. an error occured"
              }

            }
        }

        async getAllSupplier(request: Request, response: Response){
         return (await this.supplierRepo.find())

        }

        async deleteSupplier(request:Request , response: Response){

               const supplierId = request.params.Id
              
              const supplier = await this.supplierRepo.findOne(supplierId);

       
            const supplierToDelete = await this.supplierRepo.findOne()
            await this.supplierRepo.remove(supplierToDelete);

            const removed = {
                "success": "supplier removed"
            }

            return removed;
             } 
         
}