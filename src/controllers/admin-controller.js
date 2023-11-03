import { Admin } from "../models/admin";
import { User } from "../models/User";
import { sign } from "jsonwebtoken";
import bcrypt from 'bcrypt'
import { successResponse, errorResponse } from "../middleware/response";
import { config } from 'dotenv'
config()


export const registerAdmin = async(req, res ) => {
    try{
        const {full_name, email, password} = req.body
        const existingAdmin = await Admin.findOne({full_name})
        if(existingAdmin){
            return errorResponse(res, 401, 'Admin already exists')
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newAdmin = new Admin({
            full_name,
            email,
            password: hashedPassword
        })
        await newAdmin.save()
        const hidePass = await Admin.findOne(newAdmin).select('-password')
        successResponse(res, 200, 'Admin registered successfully', hidePass)
    }catch(err){
      console.log(err)
        errorResponse(res, 500, "Internal server error", err)
    }
}

export const loginAdmin = async(req, res) => {
    try{
      const {email, password} = req.body
      const admin = await Admin.findOne({email})
      if(!admin){
        return errorResponse (res, 401, "Authentication failed")
      }
      const passwordMatch = await bcrypt.compare(password, admin.password)
      if(!passwordMatch){
        return errorResponse(res, 401, "Invalid Password", {})
      }
      const token = sign({objectId: admin._id, username: admin.username}, process.env.SECRET_KEY, {expiresIn:'1d'})
      successResponse(res, 200, ({token}))
    }catch(err){
      console.log(err);
      errorResponse (res, 500, "Internal Server Error", err)
    }
  }

  export const updateAdmin = async (req, res) => {
    try{
      const {full_name, email, password} = req.body
      const hashedPassword = await bcrypt.hash(password, 10)
      const updateAdmin = await Admin.findByIdAndUpdate(
        req.params.id,
        {
          full_name,
          email,
          password: hashedPassword,
        },
        {new: true}  
      ).select("-password")
      if(!updateAdmin){
        return errorResponse(res, 404, "Admin not found", {})
      }
      successResponse(res, 200, "Updating Admin Successfull", updateAdmin)
    }catch(err){
      console.log(err)
      errorResponse(res, 500, "Internal Server Error", err)
    }
  }
  
export const deleteAdmin = async (req, res) => {
    try{
      const deleteAdmin = await Admin.findByIdAndDelete(req.params.id)
      if(!deleteAdmin){
        errorResponse(res, 404, 'Admin not found', {});
      }
      successResponse(res,200, "Admin deleted Successfully", deleteAdmin);
      }catch(err){
        console.log(err)
        errorResponse(res, 500, "Internal Server Error", err)
      }
}

export const viewKYCDocuments = async(req, res) => {
    try{
        const userInWaiting = await User.find({status: '4'}).select("full_name, kyc_documents")
        if(userInWaiting.length === 0){
          return errorResponse(res, 401, "No list of KYC documents")
        }

        successResponse(res, 200, 'KYC documents sent successfully',  userInWaiting)
    }catch(err){
      errorResponse(res, 500, 'Internal server error', err)
    }
}

export const approveRejectUser = async(req, res) =>{
  try{
    // const {userId} = req.params.id
    const {status} = req.body
  
    // const admin = await Admin.findById(req.user.id)
    // if(!admin){
    //   return errorResponse(res, 404, "Admin not found")
    // }
    const user = await User.findById(req.params.id)
    if(!user){
     return errorResponse(res, 404, 'User not found')
    }
    if (status === 0) { 
      user.status = 0;
      await user.save();
      return successResponse(res, 200,'User approved successfully');
    } else if (status === 2) {
      user.status = 2;
      user.rejection_count += 1;
      if (user.rejection_count >= 3) {
        user.status = 3;
        return successResponse(res, 200, "User Baned Successfully")
      }
      await user.save();
      successResponse(res, 200, 'User rejected successfully');
    } else {
      return errorResponse(res,400,'Invalid action');
    }
  }catch(err){
      errorResponse(res, 500, 'Internal server error', err)
    }
}

