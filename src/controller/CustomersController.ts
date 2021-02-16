import { getRepository } from "typeorm";
import { Customer } from "../entity/Customer";

export class CustomersController {
    /** the customers controller class, responsible for all operations performed on a customer
     * This class exposes the customers list from the repository, orders, payments and invoices
     * It also has methods for sending notifications to customers and much more
     */

     /** initialize the various repositories to be used */
     private customerRepo = getRepository(Customer);


     /** gets all customers from the repository */
     async getAll(request: Request, response: Response) {
        return this.customerRepo.find()
     }
}