import { Request, Response } from "express";
import fetch from "node-fetch";
import * as SocketIO from 'socket.io';

export class PaymentsController {
    // mpesa key and secret and url constants
    private consumerKey = 'utSqMRM1GL5EKlO9Lm5TEA8ekP2fmAqW';
    private consumerSecret = 'nDQWeX9GHIMRLuRA';
    private mpesaBaseUrl = 'https://sandbox.safaricom.co.ke';
    private authToken = 'E3vkp84BPyDWI8WguUGniHGfp2At';

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
        const commandID = 'TransactionStatusQuery';
        const endpoint = '/transactionstatus/v1/query'

        const fetcAttempt = await fetch(`${this.mpesaBaseUrl}${endpoint}`, {
            method: 'post',
            body: req.body,
            headers: {
                'Authorization': `Bearer ${this.authToken}`
            }
        });

        const jsonresult = await fetcAttempt.json();

        return jsonresult;
        
    }

    /**get account balance */
    async getAccountBalance(req: Request, res: Response) {
        const commandId = ''
        const endpoint = '/accountbalance/v1/query'
        const fetchAttempt = await fetch(`${this.mpesaBaseUrl}${endpoint}`, {
            method: 'post',
            body: req.body,
            headers: {
                'Authorazion': `Bearer ${this.authToken}`
            }
        });

        const responseData = await fetchAttempt.json();

        return responseData;
    }

    /**registerurl for C2B and B2C API calls */
    async registerUrl(req: Request, res: Response) {
        
    }

    /**generates the token and returns the token string as a callback */
    async getAuthToken(callback) {
        const generateEndpoint = '/oauth/v1/generate?grant_type=client_credentials';

        // base 64 of consumer key and secret
        const authHeaderData = new Buffer(`${this.consumerKey}:${this.consumerSecret}`).toString('base64');

        const getAttempt = await fetch(`${this.mpesaBaseUrl}${generateEndpoint}`, {
            method: 'get',
            headers: {
                'Authorization': `Basic ${authHeaderData}`
            }
        })

        const token = await getAttempt.json();
    
        return callback(token);
    }

    /**result url callback */
    async getResult(req: Request, res: Response) {
        const data = req;
        console.log(data.body);

        const socket = new SocketIO.Server();
        socket.on('connection', (io) => {
            io.emit('apiresult', (data.body))
        })
    }

    /**result url callback */
    async getTimeout(req: Request, res: Response) {
        console.log(req.body);
    }


}