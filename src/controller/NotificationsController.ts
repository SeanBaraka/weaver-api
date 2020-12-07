import { Request, Response } from "express";
import { request } from "http";

export class NotificationsController {
    /** africas talking endpooint url */
    private atApiUrl = "https://api.africastalking.com/version1/messaging";

    /** africas talking api key */
    private atApiKey = "8a5deb8ea1088c93b1657d859da51173f9db1101291d29ed84a417bfe3673246";

    private apiUsername = "weaverbirds";

    private credentials = {
        apiKey: this.atApiKey,
        username: this.apiUsername
    }

    private AfricasTalking = require('africastalking')(this.credentials);

    private SMS = this.AfricasTalking.SMS

    sendMessage(recipients: any[], message: string) {
        const options = {
            // the numbers to send the message to
            to: recipients,
            // Set your message
            message: message,

            // Sms short code here
            // from: 'WEAVERBIRDS'
        }
    
        // sending the message from here
        this.SMS.send(options)
            .then(console.log)
            .catch(console.log);
    }

    async sendNotification(request: Request, response: Response) {

        // const recipients = ['+254724685059', "+254713366174" , "+254727275739"];

        const recipients = request.body.recipients;

        const message = request.body.message;
        

        const sendMessage = this.sendMessage(recipients, message);

        const messageSent = {
            "done": "message send"
        }

        return messageSent;
    }

}