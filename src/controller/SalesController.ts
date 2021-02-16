import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { Customer } from '../entity/Customer';
import { SaleRecord } from '../entity/SaleRecord';
import { Shop } from '../entity/Shop';
import { StockProduct } from '../entity/StockProduct';

export class SalesController {

    // initialize the repositories to use around here
    private shopsRepo = getRepository(Shop);
    private salesRepo = getRepository(SaleRecord);
    private customersRepo = getRepository(Customer);
    private productsRepo = getRepository(StockProduct)

    async makeSale(request: Request, response: Response) {
        const saleRequest = request.body
        const shopId = request.params.shopId

        console.log(saleRequest);

        const newSale = new SaleRecord();
        const shop = await this.shopsRepo.findOne(shopId);
        // the shop cannot be null, at the moment, but somewhere down the line you'll have to handle this scenario appropriately. for now, kasonge buda

        /** before recording the sale transaction, 
         * check the products, and if their quantities allow for the sale to
         * go through
         */ 
        const saleItems: StockProduct[] = Array.from(saleRequest.items);
        saleItems.forEach(async (item) => {
            const selectedProduct = await this.productsRepo.findOne(item.id);
            selectedProduct.quantity -= item.quantity
            await this.productsRepo.save(selectedProduct);
        })

        /** lets start with a normal cash sale.
         * i.e one where no customer is needed, sale is completed
         * immediately */
        newSale.shop = shop
        newSale.receiptNumber = saleRequest.receiptNumber
        newSale.paymentMethod = saleRequest.paymentMethod
        newSale.saleItems = JSON.stringify(saleRequest.items)
        newSale.saleAmount = saleRequest.totalAmount
        newSale.receivedAmount = saleRequest.amountReceived
        newSale.balance = newSale.receivedAmount - newSale.saleAmount
        if(saleRequest.customer != undefined) {
            const customer = saleRequest.customer;
            if (customer != 'customer') {
                let newCustomer: Customer;
                newCustomer = await this.customersRepo.findOne({
                    where: {
                        name: customer.customerName
                    }
                })
                if (newCustomer != null) {
                    newSale.customer = newCustomer
                } else {
                    newCustomer = new Customer();
                    newCustomer.name = customer.customerName
                    newCustomer.telephone = customer.customerTel
                    await this.customersRepo.save(newCustomer);
                    newSale.customer = customer;
                }
            }
        }
        
        try {
            const addSaleAttempt = await this.salesRepo.save(newSale);

            if(addSaleAttempt) {
                const successfullSale = {
                    receiptNumber: addSaleAttempt.receiptNumber,
                    paymentOption: addSaleAttempt.paymentMethod,
                    shop: addSaleAttempt.shop.name
                }
                return successfullSale;
            }
        } catch (error) {
            return error;
        }

    }

    /** get all sales records */
    async getAllSales() {
        return this.salesRepo.find({
            relations: ['shop']
        });
    }

    /** get all sales records for a particular shop */
    async getSales(req: Request, response: Response) {
        const shopId = req.params.shopId
        const shop = await this.shopsRepo.findOne(shopId)
        return this.salesRepo.find({
            where: {
                shop: shop
            }
        })
    }
}