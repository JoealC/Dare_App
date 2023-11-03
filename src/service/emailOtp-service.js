import nodemailer from 'nodemailer'
import {config} from 'dotenv'
config()

const transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user: process.env.user,
        pass: process.env.pass
    },
    tls:{
        rejectUnauthorized: false
    },
})

export const sendVerificationEmail = async (email, otp) =>{
    const mailOptions = {
        from: process.env.user,
        to:email,
        subject: 'Email Verification OTP',
        text: `Your OTP is: ${otp}`,
    }
    try{
        await transporter.sendMail(mailOptions)

    }catch(err){
        console.error("Email could not be sent:", err)
    }
}