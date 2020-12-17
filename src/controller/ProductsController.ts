import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../entity/Product";
import { Shop } from "../entity/Shop";
import { StockProduct } from "../entity/StockProduct";

export class ProductsController {
    // initialize the products repository
    private productsRepo = getRepository(Product);
    private stockProductsRepo = getRepository(StockProduct);
    private shopsRepo = getRepository(Shop);

    /** adds a product to the database */
    async addProduct(req: Request, resp: Response) {
        // create an instance of the product
        let product = new Product();

        // populate values from the request body object
        product.name = req.body.name;
        product.unitPrice = req.body.unitPrice;
        product.availableUnits = req.body.qty;

        // attempt to add the product to the products repository and return the response
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

    /** attempt to add a given product to the repository.
     * @param  product
     * @param response
     */
    async addProductToRepository(product, resp) {
        const addAttempt = await this.stockProductsRepo.save(product);

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


    /** insert products into the inventory.
     * a product can only be added to a particular store/shop.
     * I think this comes in handy when making sells or transfers of products
     * from the main wholesale shop to the individual shops, as well as from the
     * stores to the wholesale or shops.
     */
    async addInventoryProduct(req: Request, response: Response) {
        // create an instance of the product
        let product = new StockProduct();

        // find the shop matching the shop Id from the request body
        const shop = await this.shopsRepo.findOne({
            where: {
                id: req.body.shopId
            }
        })

        // assign the product to the specific shop
        product.shop = shop;
        
        // populate values from the request body object
        product.name = req.body.name;
        product.serialNumber = req.body.serialNumber;
        product.quantity = req.body.qty;
        product.costPrice = req.body.costPrice;
        product.minPrice = req.body.minPrice; 
        product.maxPrice = req.body.maxPrice;
        product.sellingPrice = req.body.sellingPrice;

        // attept to add the product to the database and return the response
        return this.addProductToRepository(product, response);

    }

    /**get all products from a particular store */
    async getStoreStock(req: Request, response: Response) {
        const shopId = req.params.id

        // get the shop based on the id
        const shop = await this.shopsRepo.findOne({
            where: {
                id: shopId
            }
        });

        if (shop == null) {
            const errorShopNotFound = {
                "error": "the requested shop was not found"
            }
            response.status(404);
            return errorShopNotFound;
        }

        // attempt to get all products based on the store found above
        const products = await this.stockProductsRepo.find({
            where: {
                shop: shop
            }
        })

        // return the array of products found
        return products;
    }
}