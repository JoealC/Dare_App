import Joi from "joi";

const markDareCompletedSchema = Joi.object({
  dare_Id: Joi.string().required(),
 
})

export const markDareCompletedValidator = (req, res, next) => {
    try{
        const {error} = markDareCompletedSchema.validate(req.body)
        if(error){
            return errorResponse(res, 400, {error: error.details[0].message})
        }
        next()
    }catch(err){
        console.log(err)
        errorResponse(res, 500, "Internal Server Error")
    }
}