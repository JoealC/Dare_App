import Joi from "joi";
import { errorResponse } from "../middleware/response";

const createDareSchema = Joi.object({
  dare_name: Joi.string().required(),
  suggested_to: Joi.string().required(),
  time: Joi.string().required(),
  date: Joi.date()
})

export const createValidator = (req, res, next) => {
    try{
        const {error} = createDareSchema.validate(req.body)
        if(error){
            return errorResponse(res, 400, {error: error.details[0].message})
        }
        next()
    }catch(err){
        console.log(err)
        errorResponse(res, 500, "Internal Server Error")
    }
}

