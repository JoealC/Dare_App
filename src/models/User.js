import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 200,
    },
    full_name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200,
    },
    kyc_documents:[{
        type: String,
    }],
    profile_image:[{
        type: String,
    }],
    gender:{
        type: String,
        required: true,
    },
    date_of_birth:{
        type: Date,
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
        maxlength: 200,
    },
    otp:{
        type: String,
        require: true,
    },
    status:{
        type:Number,
        enum:[4, 0, 2, 3, 1],
        default: 4
      },
    rejection_count:{
        type: Number,
        default: 0,
    },
    friends:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    // friendsID:{
    //     type: [mongoose.Schema.Types.ObjectId],
    //     default: [],
    // },
    created_at:{
        type: Date,
        default: Date.now()
      }
    },
    {timestamps: false});

export const User = mongoose.model('User', userSchema)