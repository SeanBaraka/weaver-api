import { getRepository } from "typeorm";
import { Request, Response } from "express";
import * as jwt from 'jsonwebtoken'
import { Customer } from "../entity/Customer";

export class CustomersController {
    /** the customers controller class, responsible for all operations performed on a customer
     * This class exposes the customers list from the repository, orders, payments and invoices
     * It also has methods for sending notifications to customers and much more
     */

    // token secret key heey make this enviroment variable
    private secretKey = 'bf9cee3ec7e478010b09d82f1f1ee38ca44937c6548ac01ed8bf19ae49f6c811726c95a7234d0b641e8e4cf48a0ae4fc28a33123adf286d3b3ecce40d4c7f67220';

     /** initialize the various repositories to be used */
     private customerRepo = getRepository(Customer);


     async addCustomer(request: Request, response: Response){
         // so here we first check if the request body has a name on it.
         // if no name is present on the request, halt the execution and 
         // demand for a name!!!!
         if(request.body.name == undefined || request.body.name == null) {
            const errorMessage = {
               "error": `Sorry, you need to insert the name of the customer`
            }
            response.status(403) // a status error code indicating that the customer was not saved
            return errorMessage; // return a very angry message, like why would you not provide a name..
         }
        // add a new customer
        const customer = new Customer();

        customer.name = request.body.name; 
        customer.location = request.body.location;
        customer.telephone = request.body.telephone;

        const addCustomer = await this.customerRepo.save(customer);
        
        if (addCustomer) {
            const successMessage = {
                "success": `customer ${addCustomer.name} added successfully`
            }

            return successMessage;
        }
   
     }


     /** gets all customers from the repository */
     async getAllCustomers(request: Request, response: Response) {
        return (await this.customerRepo.find()).reverse()
     }

     /**deletes the customer by id */
     async removeCustomer(request: Request, response: Response) {

      const customerId = request.params.Id
       
      // getting the customer based on the id passsed on the parameters
      const customer = await this.customerRepo.findOne(customerId);

      // first get the user roles for the logged in user
    
        
   await this.customerRepo.remove(customer);

          const removed = {
              "success": "customer removed"
          }

         return removed;

    
  }
     
}