import Joi from "joi";
import { errorResponse } from "../middleware/response";

const approveRejectValidation = Joi.object({
    status: Joi.number().required()
})

export const approveRejectValidator = (req, res, next) => {
    try{
        const {error} = approveRejectValidation.validate(req.body)
        if(error){
            return errorResponse(res, 400, {error: error.details[0].message})
        }
        next()
    }catch(err){
        console.log(err)
        errorResponse(res, 500, "Internal Server Error")
    }
}