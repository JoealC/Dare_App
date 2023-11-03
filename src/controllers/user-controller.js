import { User } from "../models/User";
import { sign } from "jsonwebtoken";
import { successResponse, errorResponse } from "../middleware/response";
import bcrypt from 'bcrypt'
import otpGenerator from 'otp-generator'
import {config} from "dotenv"
import { sendVerificationEmail } from "../service/emailOtp-service";
config()

export const registerUser = async (req, res) => {
    try{
        const {email, full_name, kyc_documents, profile_image, gender, date_of_birth, password} = req.body
        const existingUser = await User.findOne({full_name, email})
        if(existingUser){
            return errorResponse(res, 401, 'User already exists')
        } 
        const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false })
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            email,
            full_name,
            kyc_documents,
            profile_image,
            gender,
            date_of_birth,
            password: hashedPassword,
        })
        newUser.otp= otp
        await newUser.save()
        const hidePass = await User.find(newUser).select('-password')
        await sendVerificationEmail(email, otp)
        successResponse(res, 200, 'User registered successfully, Please verify your email', hidepass)
    }catch(err){
        errorResponse(res, 500, "Internal server error", err)
    }
}

export const verifyEmail = async(req, res) => {
    try{
        const{email, otp}= req.body
        const user = await User.findOne({email})
        if(user && user.otp === otp){
            user.status = 0,
            user.save()
            //const authToken = sign({objectId: user._id, email: user.email}, process.env.SECRET_KEY, {expiresIn: '1d'})
            successResponse(res, 200, "Email verified, user approved")
        }else{
            errorResponse(res, 400, "Invalid OTP")
        }
    }catch(err){
        errorResponse(res, 500, "Error verifying email", err)
    }
}

export const loginUser = async(req, res) =>{
    try{
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(user){
            if(user.status === 4){
                errorResponse(res, 400, "Waiting for admin's approval")
            }else if(user.status === 0){
                const passwordMatch = await bcrypt.compare(password, user.password)
                if(passwordMatch){
                    const authToken= sign({objectId: user._id, email: user.email}, process.env.SECRET_KEY, {expiresIn:'1d'})
                    successResponse(res, 200, "Token Authenticated", authToken)
                }else{
                    errorResponse(res, 401, 'Invalid password')
                }
            }
        }else{
            errorResponse(res, 404, "User not found")
        }
    }catch(err){
        errorResponse(res, 500, "Error logging in", err);
    }
}

export const updateUser = async (req, res) => {
    try{
        const {email, full_name, kyc_documents, profile_image, gender, date_of_birth, password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                email,
                full_name,
                kyc_documents,
                profile_image,
                gender,
                date_of_birth,
                password: hashedPassword
            },
            {new: true}
        ).select("-password")
        if(!updateUser){
            return errorResponse(res, 404, "User not found")
        }
        successResponse(res, 200, "Updating User Successfull", updateUser)
    }catch(err){
        console.log(err)
        errorResponse(res, 500, "Internal Server Error", err)
      }
}

export const deleteUser = async(req, res) => {
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        if(!deleteUser){
            errorResponse(res, 404, 'User not found');
        }
        successResponse(res,200, "User deleted Successfully")
    }catch(err){
        console.log(err)
        errorResponse(res, 500, "Internal Server Error", err)
      }
}


