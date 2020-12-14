import { Request, Response } from "express";
import fetch from "node-fetch";
import {} from 'request'

export class PaymentsController {
    // mpesa key and secret and url constants
    private consumerKey = 'utSqMRM1GL5EKlO9Lm5TEA8ekP2fmAqW';
    private consumerSecret = 'nDQWeX9GHIMRLuRA';
    private mpesaBaseUrl = 'https://sandbox.safaricom.co.ke';

    /** generate mpesa authorization token to use with other api calls */
    async generateToken(req: Request, response: Response) {
        let accessToken = ''
        await this.getAuthToken((resp) => {
            accessToken = resp
        });

        return accessToken;
        
    }

    /**check the transaction status */ 
    async getTransactionStatus(req: Request, response: Response) {
        const commandID = 'TransactionStatusQuery'
    }

    /**registerurl for C2B and B2C API calls */
    async registerUrl(req: Request, res: Response) {
        
    }

    /**generates the token and returns the token string as a callback */
    async getAuthToken(callback) {
        const generateEndpoint = '/oauth/v1/generate?grant_type=client_credentials';

        // base 64 of consumer key and secret
        const authHeaderData = new Buffer(`${this.consumerKey}:${this.consumerSecret}`).toString('base64');

        await fetch(`${this.mpesaBaseUrl}${generateEndpoint}`, {
            method: 'get',
            headers: {
                'Authorization': `Basic ${authHeaderData}`
            }
        }).then(res => res.json()).then(json => callback(json))
    }


}