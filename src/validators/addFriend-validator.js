import Joi from "joi";

const addFriendSchema = Joi.object({
  userId: Joi.string().required(),
  friendId: Joi.string().required(),
})

export const addFriendValidator = (req, res, next) => {
    try{
        const {error} = addFriendSchema.validate(req.body)
        if(error){
            return errorResponse(res, 400, {error: error.details[0].message})
        }
        next()
    }catch(err){
        console.log(err)
        errorResponse(res, 500, "Internal Server Error")
    }
}