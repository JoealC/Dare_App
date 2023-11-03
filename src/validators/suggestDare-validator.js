import Joi from "joi";


const suggestDareSchema = Joi.object({
    dare_id: Joi.string().required(),
    friend_id: Joi.string().required(),
  })

  export const suggestDareValidator = (req, res, next) => {
    try{
        const {error} = suggestDareSchema.validate(req.body)
        if(error){
            return errorResponse(res, 400, {error: error.details[0].message})
        }
        next()
    }catch(err){
        console.log(err)
        errorResponse(res, 500, "Internal Server Error")
    }
}