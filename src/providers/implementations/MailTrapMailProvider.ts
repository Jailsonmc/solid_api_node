import { IMailProvider, IMessage } from "../IMailProviders";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";
import * as dotenv from 'dotenv';

dotenv.config();

export class MailTrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_MAILTRAP,
            port: 2525,
            auth: {

                user: process.env.USER_MAILER ?? '',
                pass: process.env.USER_PASS ?? ''
            }
        })
    }

    async sendMail(message: IMessage): Promise<void>{
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html : message.body,
        })
    }
     

}