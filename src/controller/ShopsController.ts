import { json } from "body-parser";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { EndDayReport } from "../entity/EndDayReport";
import { Shop } from "../entity/Shop";
import { shopCategory } from "../entity/shopCategory";
import { StockInfo } from "../entity/StockInfo";

export class ShopsController {
    
    //initialize the shops repository
    private shopsRepo = getRepository(Shop);

    //initialize the stock repository
    private stockRepo  = getRepository(StockInfo);

    //initialize the reports repository
    private reportRepo = getRepository(EndDayReport);

    //initialize the shop categories repository
    private shopCatRepo = getRepository(shopCategory);

    /** gets all shops in the database */
    async getAll(req: Request, res: Response) {
        const shops = await this.shopsRepo.find({relations: ['category']}); // get all shops from the repository
        return shops; // return the shops obtained
    }

    /** add a new shop */
    async addShop(req: Request, response: Response) {
        const shop = new Shop()
        let category;
        const shopCat = await this.shopCatRepo.findOne({
            where: {
                name: req.body.shopCategory
            }
        });

        // attempt to see if a matching shop category was found
        // if found, proceed, if not found, create a new category
        if (shopCat == null) {
            let cat = new shopCategory();
            cat.name = req.body.shopCategory;
            await this.shopCatRepo.save(cat);
            category = cat
        } else {
            category = shopCat;
        }

        shop.category = category;
        shop.name = req.body.name
        if(req.body.desc) {
            shop.description = req.body.desc
        }

        const addShopAttempt = await this.shopsRepo.save(shop);

        if(addShopAttempt) {
            const message = {
                "success": `${addShopAttempt.name} shop added successfully`
            }

            return message;
        }
    }

    /** Gets a single shop based on the shop name provided */
    async getShop(req: Request, resp: Response) {
        // request body should have a shopName key
        const shopName = req.body.shopName

        // get the shop details from the database, based on the
        // shop name provided in the request body
        const shop = await this.shopsRepo.findOne({name: shopName}, {
            relations: ['stocks']
        })

        const date = new Date(Date.now()).toISOString().split('T')[0];

        // get the last stock value of the shop
        const shopStock = shop.stocks.filter(x => x.createdAt.toISOString().split('T')[0] == date); 
        const openingtUnitsArray = [];
        const subTotalArray = [];
        shopStock.forEach((stockElement) => {
            openingtUnitsArray.push(stockElement.openingUnits)
            subTotalArray.push(stockElement.unitPrice*stockElement.openingUnits);
        })

        // total items in the store
        const totalOpeningStock = openingtUnitsArray.reduce((a,b) => a + b, 0);

        //total cost of items in the store
        const totalOpeningStockCost = subTotalArray.reduce((a,b) => a + b, 0)

        if(shop == null) {
            const shopNotFound = {
                'found': false,
                "error": `sorry, ${shopName} does not exist`
            }
            resp.status(404)
            return shopNotFound;
        }

        // TODO: return the computed values for each of the expected values. i.e. Total opening stock, total amount e.t.c.
        const shopData = {
            "found": true,
            "shop": {
                "id": shop.id,
                "name": shop.name,
                "openStatus": shop.openStatus,
                "openingStock": totalOpeningStock,
                "amount": totalOpeningStockCost
            }
        }

        return shopData;


    }

    /** opening the shop.
     * Assigns the openning stock and marks the start of a day's selling cycle.
     */
    async openShop(req: Request, resp: Response) {
        // get today's date for filtering
        const today = new Date(Date.now()).toISOString().split('T')[0]
        const shopId = req.params.id; //obtain the shop id from the request parameters

        const fullRequest = req.body // the full request body

        // attempt to get the shop based on the shop id
        const shop = await this.shopsRepo.findOne(shopId);

        // if a shop matching the given id does not exist, then throw an error 404 and return an error message
        if(shop == null) {
            const shopNotFound = {
                "error": "The requested shop was not found"
            }

            resp.status(404); // 404 implies not found
            return shopNotFound; // error message
        }

        const openingStockArray = Array.from(fullRequest);

        //only open the shop if the shop is not opened
        // should get back to this. ASAP
        if(shop.openStatus != true) {
            // holds the total opening stock
            let totalOpening = []
            // create a new stock record for each of the stock items
            openingStockArray.forEach(async (item: any) => {
                let stock = new StockInfo();
                stock.productName = item.name;
                stock.unitPrice = item.unitPrice;
                stock.openingUnits = item.availableUnits;
                stock.closingUnits = stock.openingUnits;
                stock.shop = shop;
                
                totalOpening.push(stock.openingUnits * stock.unitPrice);
                // an attempt to add the stock to the database
                let addStockAttempt = await this.stockRepo.save(stock);
            })
            // change the status of the shop to open
            shop.openStatus = true;
            let updateShop = await this.shopsRepo.save(shop);
            const openingAmount = totalOpening.reduce((a, b) => a + b, 0)

            // when a stock is successfully added, then display a success message and a status code 200
            if(updateShop) {
                const successMessage = {
                    "success": `Date: ${today} shop openned and stock record updated. Total opening stock ${openingAmount}`
                }
                resp.status(200); // OK code, means everything went well

                return successMessage; // success message

            }
        } else if(shop.openStatus == true) {
            openingStockArray.forEach(async (item: any) => {
                // check if item exists in stock info by finding all products with the given name and shop
                var findStock = await this.stockRepo.find({
                    productName: item.name,
                    shop: shop
                })

                // filtering all products from the given shop by the created at date column. only show the last product with the current day's date and matching the given criteria.
                const existingStock = findStock.filter(x => x.createdAt.toISOString().split('T')[0] === today).pop();

               // if the product matching the criteria is found, play witht the added and available units as well as the closing units
                if (existingStock != null) {  
                    existingStock.addedUnits += parseInt(item.availableUnits)
                    existingStock.closingUnits = existingStock.openingUnits + existingStock.addedUnits
                   
                    // save the item changes to the database
                    const what = await this.stockRepo.save(existingStock);
                   
                } else {
                    // the product does not exist in the stock infos completely, now a new stockInfo record has to be created.
                    let stock = new StockInfo();
                    stock.productName = item.name;
                    stock.unitPrice = item.unitPrice;
                    stock.openingUnits = item.availableUnits;
                    stock.closingUnits = stock.openingUnits;
                    stock.shop = shop;
    
                    // an attempt to add the stock to the database
                    let addStockAttempt = await this.stockRepo.save(stock);
                }
            })
            const successMessage = {
                "success": `Shop - ${shop.name} stock items updated at ${new Date(Date.now()).toLocaleTimeString()}`
            }
            resp.status(200); // OK code, means everything went well

            return successMessage; // success message
        }

    }

    /** get the days stock data */
    async getDayStock(req: Request, res: Response) {
        const shopId = req.params.id; // get the shop data from the passed id parameter
        
        // temporary date figure
        // const date = '2020-11-09';
        const date = req.body.date;

        // get shop data
        const shop = await this.shopsRepo.findOne(shopId);

        //get stock data for the given shop
        const shopStocks = await this.stockRepo.find({
            where: {
                shop: shop
            }
        });

        const daysStock = shopStocks.filter(x => x.createdAt.toISOString().split('T')[0] == date);
        
        return daysStock;

    }

    /** gets the shop categories */
    async getCategories(request: Request, response: Response) {
        return this.shopCatRepo.find();
    }

    /** closes the shop for the day, and calculates the total sales made */
    async closeShop(req: Request, resp: Response) {
        const shopId = req.params.id; // getting the shop id from the request parameters
        const reqBody = req.body;

        // get the date of the stocks to close
        // const date = reqBody.date

        // convert the request body to an array, as it holds the full list of the closing stock products
        const closingStockArray = Array.from(reqBody.stocks);

        // attempt to find the shop
        let shop = await this.shopsRepo.findOne(shopId);

        if(shop == null) {
            const shopNotFound = {
                "error": "The requested shop was not found"
            } 

            resp.status(404); // 404 implies not found
            return shopNotFound; // error message
        }

        // check if the shop is opened
        const openStatus = shop.openStatus
        if(openStatus != true) {
            const unableToCloseShop = {
                "error": "sorry, the shop is not open"
            }
            resp.status(405) // the operation is not allowed
            return unableToCloseShop;
        }

        
        // find the stock for the day, matching the given shop details.
        let stockData = await this.stockRepo.find({where: {
            shop: shop
        }});

        
        // attempt to update the stock records passed
        closingStockArray.forEach(async (stockItem) => {
            await this.stockRepo.save(stockItem);
        })

        // Create an end of day report for the closing stock items
        const report = new EndDayReport()
        report.stockItems = JSON.stringify(reqBody.stocks)
        let soldAmount = 0;
        closingStockArray.forEach((item: any) => {
            soldAmount += parseInt(item.soldUnits)
        })

        report.shop = shop.name;
        report.openingStockAmount = req.body.openingStock;
        report.closingStockAmount = req.body.closingStock;
        report.addedStockAmount = req.body.addedStock;
        report.soldStockAmount = (report.openingStockAmount + report.addedStockAmount) - report.closingStockAmount

        let attemptAddReport = await this.reportRepo.save(report);

        if (attemptAddReport) {
            const successMessage = {
                "success": "shop closed successfully"
            }
    
            // before completion, change the shop's status to closed
            shop.openStatus = false;
            await this.shopsRepo.save(shop);
    
            return successMessage;
        } else {
            const unknownMessage = {
                "error": "something wrong happened"
            }
            resp.status(500);
            return unknownMessage;
        }
    }

    /** attempt to update the store for any new added stock records */
    async updateStockInfo(req: Request, response: Response) {
        const stockInfo = await this.stockRepo.findOne(req.params.id)
        if (stockInfo == null) {
            const foundStockMessage = {
                'error': "no stock record matching the given id was found"
            }
            response.status(404);
            return foundStockMessage;
        }
    }

    /** get stock reports */
    async getReport(req: Request, res: Response) {
        const stockRepos = (await this.reportRepo.find()).reverse();
        return stockRepos;
    }

} 