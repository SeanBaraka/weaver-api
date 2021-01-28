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
        // check if the product exists in the first place
        let product: StockProduct;

        product = await this.stockProductsRepo.findOne({
            where: {
                name: req.body.name
            }
        })

        if (product != null) {
            
            product.name = req.body.name;
            product.serialNumber = req.body.serialNumber;
            product.quantity = req.body.qty;
            product.costPrice = req.body.costPrice;
            product.minPrice = req.body.minPrice; 
            product.maxPrice = req.body.maxPrice;
            product.sellingPrice = req.body.sellingPrice;

            await this.stockProductsRepo.save(product);

            const updated = {
                "success": "product updated successfully"
            }

            return updated;

        } else {

            // create an instance of the product
            product = new StockProduct();

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

    }

    /** remove a product from the store */
    async removeProductFromStore(req: Request, resp: Response) {
        const productId = req.body.itemId
        const shopId = req.params.shopId

        const shop = await this.shopsRepo.findOne(shopId);

        if (shop != null) {
            const productToDelete = await this.stockProductsRepo.findOne({
                where: {
                    shop: shop,
                    id: productId
                }
            })
            await this.stockProductsRepo.remove(productToDelete);

            const removed = {
                "success": "product removed from shop"
            }

            return removed;

        } else {
            const error = {
                "error": "somethings wrong somewhere and operation not completed"
            }

            resp.status(404);
            return error;
        }
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

    /** product transfers between shops */
    async transferProducts(request: Request, response: Response) {
        // prducts will move from a particular store, to another store.
        // our request should have both stores
        const sourceShopId = request.body.sourceShopId // read the shop id
        const sourceShop  = await this.shopsRepo.findOne(sourceShopId, {
            relations: ['products']
        }); // use the shop id to find the matching shop
        // find a list of all products in the source shop
        const sourceShopProducts = sourceShop.products;


        const destinationShopId = request.body.destinationShopId; // read the shop id from the request, same as above
        const destinationShop = await this.shopsRepo.findOne(destinationShopId, {
            relations: ['products']
        }); // use the shop id to find the matching shop
        const destinationShopProducts = destinationShop.products // products in the destination shop

        // we also need to have the product and the quantities to transfer
        const productId = request.body.productId
        // this is the product we are transfering. we filter it from the shop products based on its id        
        const productToMove = sourceShopProducts.find(x => x.id == productId); 

        // what amounts or quantities to move were selected from the client end ?
        const quantityToMove = request.body.quantity // reading the quantity to transfer from the request body

        // now we have the shop moving the product,and the product being moved.
        // we could check if both the available units for the product at the source shop
        // are suitable for transferring. ie. greater or equal to the quantityToMove
        // if the condition is satisfied, 
        if (productToMove.quantity >= quantityToMove) { 
            // if the available units are much more than the selected quantity, and we assume this is the normal behaviour,
            // since everything is going well upto this stage, lets check if the destination shop has the product in its
            // inventory.
            const productIsPresentInDestinationShop = destinationShopProducts.find(x => x.serialNumber == productToMove.serialNumber)
            if (productIsPresentInDestinationShop != null) {
                // here a product matching the given name is found
                // since a product was found, modifiy its quantity. the end
                productIsPresentInDestinationShop.quantity = productIsPresentInDestinationShop.quantity + quantityToMove
                await this.stockProductsRepo.save(productIsPresentInDestinationShop);
                await this.shopsRepo.save(destinationShop); // update the destination shop
                // as much as we add to the destination shop, also subtract from the source shop
                productToMove.quantity -= quantityToMove;
                await this.shopsRepo.save(sourceShop); // update the source shop
                await this.stockProductsRepo.save(productToMove)

                const updateMessage = {
                    "success": `${quantityToMove} items moved from ${sourceShop.name} to ${destinationShop.name}`
                }

                return updateMessage; // send the update message back to the client
            } else {
                // the product does not exist on the shop.
                // what do we do now you may ask, we create that product in the shop
                const cloneProduct = {...productToMove}; // we clone the product to move into a new product
                cloneProduct.shop = destinationShop; // change the shop of the clonned product to match the destination shop
                cloneProduct.id = undefined; // here, we do something really important. i.e. change the id to undefined, to allow sql to give us an id
                cloneProduct.quantity = quantityToMove; // change the quantity of the cloned product
               
                const addAttempt = await this.stockProductsRepo.save(cloneProduct); // save the clonned product to the destination shop

                // get the product from the source shop
                const item = sourceShopProducts.find(x => x.serialNumber == productToMove.serialNumber)
                item.quantity -= quantityToMove
                await this.stockProductsRepo.save(item);

                const successMessage = {
                    "success": `${quantityToMove} items moved from ${sourceShop.name} to ${destinationShop.name}`
                }

                return successMessage; // return the success message back to the client
            }

        } else {
            // throw and error indicating that the products being moved are not available.
            // i.e  the quantity to move is greater than the available product units in that particular shop
            const errorMessage = {
                "error": `unable to move ${quantityToMove} items, the available units are ${productToMove.quantity}`
            }

            response.status(304); // attach a not modified header to the response given out
            return errorMessage; // display the error message to the user
        }
        
    }
}