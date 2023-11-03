import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    full_name:{
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 200,
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
        maxlength: 200,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 200,
    },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    status:{
        type:Number,
        default: 1,
      },
    created_at:{
        type: Date,
        default: Date.now()
      }
    },

    {timestamps: true});

export const Admin = mongoose.model('Admin', adminSchema)
    