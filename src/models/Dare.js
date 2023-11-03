import mongoose from "mongoose";

const dareSchema = new mongoose.Schema({
    dare_name:{
        type: String,
        required: true,
    },
    suggested_to:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    time:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
    status:{
        type: String,
        enum:['pending', 'completed', 'rejected'],
        default: 'pending'
    },
    created_at:{
        type: Date,
        default: Date.now()
      }
    },
    {timestamps: true});

export const Dare = mongoose.model('Dare', dareSchema)