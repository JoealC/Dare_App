import Joi from "joi";
import { errorResponse } from "../middleware/response";

const userValidation = Joi.object({
    email: Joi.string().min(3).max(200).required(),
    full_name: Joi.string().min(3).max(200).required(),
    kyc_documents: Joi.array().min(3).max(200).required(),
    profile_image: Joi.array().min(3).max(200).required(),
    gender: Joi.date().min(3).max(200).required(),
    date_of_birth: Joi.string().min(3).max(200).required(),
    password: Joi.string().min(6).max(200).required(),
})

export const registerUserValidator = (req, res, next) => {
    try{
        const {error} = adminValidation.validate(req.body)
        if(error){
            return errorResponse(res, 400, {error: error.details[0].message})
        }
        next()
    }catch(err){
        console.log(err)
        errorResponse(res, 500, "Internal Server Error")
    }
}