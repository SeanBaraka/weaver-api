import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../entity/Product";

export class ProductsController {
    // initialize the products repository
    private productsRepo = getRepository(Product);

    /** adds a product to the database */
    async addProduct(req: Request, resp: Response) {
        // create an instance of the product
        let product = new Product();

        // populate values from the request body object
        product.name = req.body.name;
        product.unitPrice = req.body.unitPrice;
        product.availableUnits = req.body.qty;

        // attempt to add the product to the products repository
        const addAttempt = await this.productsRepo.save(product);

        if(addAttempt) {
            const successMessage = {
                "success": `${product.name} added successfully`
            }

            return successMessage;
        } else {
            const errorMessage = {
                "error": "sorry, product not added. an error occured"
            }
            resp.status(500);
            return errorMessage;
            
        }
    }

    /** Retrieves a list of all products from the database repository */
    async getAll(req: Request, response: Response) {
        // get the products list
        const products = await this.productsRepo.find();

        return products.reverse(); // display the prouducts list
    }
}