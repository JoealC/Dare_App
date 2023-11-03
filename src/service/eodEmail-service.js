import nodemailer from 'nodemailer'
import {config} from 'dotenv'
config()

export const transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user: process.env.user,
        pass: process.env.pass
    },
    tls:{
        rejectUnauthorized: false
    },
})