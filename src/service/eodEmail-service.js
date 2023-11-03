import nodemailer from 'nodemailer'
import cron from 'node-cron'
import { User } from '../models/User'
import { Dare } from '../models/Dare'
import {config} from 'dotenv'
config()

cron.schedule('* * 20 * * *', async () => {
  try {
    const users = await User.find({})
    for (const user of users) {
      const completedDares = await Dare.find({ suggested_to: user._id, status: 0 })
      console.log(completedDares)
      const pendingDares = await Dare.find({ suggested_to: user._id, status: 1 })

      const emailContent = `Dear ${user.full_name},\n\n` +
        `Here are your completed dares:\n${completedDares.map(dare => dare.dare_name).join('\n')}\n\n` +
         `And here are your pending dares:\n${pendingDares.map(dare => dare.dare_name).join('\n')}`
        //console.log(completedDares.map(dare => dare.dare_name))
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
    
    const mailOptions = {
        from: process.env.user,
        to: user.email,
        subject: 'End of Day Dare Update',
        text: emailContent
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.error('Error sending EOD email:', error)
        }else{
            console.log('EOD email sent:', info.response)
        }
    })
}
  } catch (error) {
    console.error('Error in EOD email scheduler:', error);
  }
});
