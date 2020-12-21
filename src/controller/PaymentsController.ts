import { Request, Response } from "express";
import Mpesa = require("mpesa-node");
import fetch from "node-fetch";
import * as SocketIO from 'socket.io';
import * as path from 'path'
import { getRepository } from "typeorm";
import { MpesaTransaction } from "../entity/MpesaTransaction";

export class PaymentsController {

    // creating an instance of the Mpesa web api object
    private mpesaApi = new Mpesa({
        consumerKey: 'utSqMRM1GL5EKlO9Lm5TEA8ekP2fmAqW',
        consumerSecret: 'nDQWeX9GHIMRLuRA',
        enviroment: 'sandbox',
        shortCode: '603021',
        securityCredential: 'Safaricom3021#',
        initiatorName: 'apiop37',
        certPath: path.resolve('keys/sandbox-cert.cert')
    });

    // declaring the mpesa constants
    private key = 'utSqMRM1GL5EKlO9Lm5TEA8ekP2fmAqW';
    private secret = 'nDQWeX9GHIMRLuRA';
    private shortCode = '603021';
    private securityCredential = 'Safaricom3021#'
    private initiatorName = 'apiop37'


    // stores the transaction information
    private transaction: any;
   
    // transactions repository
    private transactionRepo = getRepository(MpesaTransaction);


    /** generate mpesa authorization token to use with other api calls */
    async generateToken(req: Request, response: Response) {
        let accessToken = '';
        
        accessToken = (await this.mpesaApi.oAuth(this.key, this.secret)).data

        return accessToken;
        
    }

    /**check the transaction status */ 
    async getTransactionStatus(req: Request, response: Response) {
        const commandID = 'TransactionStatusQuery';
        const endpoint = '/transactionstatus/v1/query'
        
        const transactions = await this.transactionRepo.find({
            where: {
                amount: req.body.amount
            }
        })

        const lastTransaction = transactions.pop();

        const url = "https://sandbox.safaricom.co.ke/mpesa/transactionstatus/v1/query"

        const token = 'c3vEvX2vNmiim1Wx4IeOvcklZBEG'

        const result = await fetch(url, {
            method: 'post',
            body: req.body,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const finalResult = await result.json()

        console.log(finalResult); 
    
    }

    /**get account balance */
    async getAccountBalance(req: Request, res: Response) {
       const result = await this.mpesaApi.accountBalance(this.shortCode, '4', 'https://35564206e0e7.ngrok.io/payments/timeout', 'https://35564206e0e7.ngrok.io/payments/result'); 

       const data = await result.data;

       if (data != null) {
           const accountBalanceTransactions = await this.transactionRepo.find({
               where: {
                   type: 'AccountBalance'
               }
           })

           const latestTransaction = accountBalanceTransactions.pop()
           const amount = {
               amount: latestTransaction.amount
           }
           return amount;
       }

    }

    /**registerurl for C2B and B2C API calls */
    async confirmUrl(req: Request, res: Response) {
        const data = req.body

        const transactionExists = await this.transactionRepo.findOne({
            where: {
                transactionID: data.TransID
            }
        })
        
        
        if (transactionExists != null) {
            return transactionExists;
        } else {

            let transaction = new MpesaTransaction()
            transaction.amount = data.TransAmount
            transaction.transactionID = data.TransID
            transaction.type = data.TransactionType

            await this.transactionRepo.save(transaction);
            
            return transaction;
        }
        
    }

    /**validation url */
    async validateUrl(req: Request, res: Response) {
        
        
    }

    /**generates the token and returns the token string as a callback */
    async getAuthToken(callback) {
        const generateEndpoint = '/oauth/v1/generate?grant_type=client_credentials';

        // base 64 of consumer key and secret
        return callback(this.mpesaApi.oAuth('utSqMRM1GL5EKlO9Lm5TEA8ekP2fmAqW', 'nDQWeX9GHIMRLuRA'));
    }

    /**result url callback */
    async getResult(req: Request, res: Response) {
        const data = req.body

        console.log(data);

        const accountResult = data.Result.ResultParameters.ResultParameter[0].Value;
        
        const accountBalance = accountResult.split('&')[2].split('|')[2]
        
        const transactionId = data.Result.TransactionID;
        const transactionType = data.Result.ResultParameters.ResultParameter[0].Key;

        const transaction = {
            transactionID: transactionId,
            type: transactionType,
            amount: accountBalance
        }

        const transactionExists = await this.transactionRepo.findOne({
            where: {
                transactionID: transaction.transactionID
            }
        })

        // if a transaction matching the given transaction id exists, do nothing

        if (transactionExists != null) {

            return transaction;

        } else {
            let newTransaction = new MpesaTransaction()
            newTransaction.amount = transaction.amount
            newTransaction.transactionID = transaction.transactionID
            newTransaction.type = transaction.type;

            await this.transactionRepo.save(newTransaction)

            return transaction;
        }
        
    }

    /**result url callback */
    async getTimeout(req: Request, res: Response) {
        console.log(req.body);
    }


}