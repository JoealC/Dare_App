import { Dare } from "../models/Dare";
import { User } from "../models/User";
import { errorResponse, successResponse } from "../middleware/response";
import {startOfDay, endOfDay, subDays, setDate} from 'date-fns'
import {config} from 'dotenv'
config()

export const addFriend = async (req, res) => {
    try {
      const { userId, friendId } = req.body;
      const user = await User.findById(userId);
  
      if (!user) {
        return errorResponse( res, 404, 'User not found', {});
      }
      const friend = await User.findById(friendId);
  
      if (!friend) {
        return errorResponse(res, 404, 'Friend not found', {});
      }
      if (!user.friends.includes(friendId)) {
        user.friends.push(friendId);
        await user.save();
        if(!friend.friends.includes(userId))
        friend.friends.push(userId)
        await friend.save()
        return successResponse(res, 200, 'Friend added successfully', );
        }else{
        return errorResponse(res, 200, "Friend is already in your friend list")
      }
    } catch (error) {
        console.log(error)
      errorResponse(res, 500, 'Error processing the request', error);
    }
  }

  export const createDare = async(req, res) =>{
    try{
        const{ dare_name, suggested_to, time, date } = req.body
        const dare = new Dare({
            dare_name,
            suggested_to,
            time,
            date: date
        })
        await dare.save()
        successResponse(res, 200, "Dare created successfully", dare)
    }catch(err){
        errorResponse(res, 500, 'Error creating dare', err)
    }
  }

  export const suggestDare = async(req, res) => {
    try{
        const{dare_id, friend_id} = req.body
        const dare = await Dare.findById(dare_id)
        if(!dare){
           return errorResponse(res, 404, "Dare not found", {})
        }
        dare.suggested_to.push(friend_id)
        await dare.save()
        successResponse(res, 200, "Dare suggested to friend", dare)
    }catch(err){
        errorResponse(res, 500, "Error suggesting dare to friend")
    }
  }

  export const markDareCompleted = async(req, res) => {
    try{
        const {dare_Id} = req.body
        const dare = await Dare.findById(dare_Id)
        if(!dare){
        return errorResponse(res, 404, "Dare not found", {})
        }
        dare.status = 0
        await dare.save()
        successResponse(res, 200, "Dare marked as completed", dare)
    }catch(err){
        errorResponse(res, 500, "Error marking dare as completed")
    }
  }

  export const editDare = async(req, res) => {
    try{
        const {dare_name, time, date} = req.body
        const editDare = await Dare.findByIdAndUpdate(
            req.params.id,
            {
            dare_name: dare_name,
            time: time,
            date: date,
            },
            {new: true}
        )
        console.log(editDare)
        if(!editDare){
            return errorResponse(res, 404, 'Dare not found',{})
        }
        successResponse(res, 200, 'Dare edited successfully', editDare)
    }catch(err){
        console.log(err)
        errorResponse(res, 500, 'Error editing dare', err)
    }
  }

  export const deleteDare = async(req, res) => {
    try{
        const deleteDare = await Dare.findByIdAndDelete(req.params.id)
        if(!deleteDare){
            return errorResponse(res, 404, 'Dare not found',{})
        }
        successResponse(res, 200, "User deleted successfully")
    }catch(err){
        errorResponse(res, 500, "Internal server Error")
    }
  }

  export const filterDare = async(req, res) => {
    try{
        const { dare_name, suggested_to, time, startDate, endDate, searchDate, searchId } = req.query
        const filter ={}
        if(dare_name){
          filter.dare_name = new RegExp(dare_name, 'i')
       }
       if(suggested_to){
        filter.suggested_to = new RegExp(suggested_to, 'i')
        }
        if(time){
          filter.time = new RegExp(time, 'i')
          }
        if(startDate && endDate){
          filter.date = {
            $gte: new Date(startDate),
            $lte: new Date(endDate)
          }
        }else if(searchDate){
          const searchDay = new Date(searchDate)
          const nextDay = new Date(searchDate)
          nextDay.setDate(searchDay.getDate() + 1)
          filter.date = {
            $gte: searchDay,
            $lte: nextDay
          }
        }
        if (searchId) {
          filter._id = searchId 
        }
        const filteredDares = await Dare.find(filter)
        if(filteredDares.length === 0) {
         return errorResponse(res, 404, "No dares found", filteredDares)
        }
        successResponse(res, 200, "Dare filtered successfully", filteredDares)

    }catch(err){
      console.log(err)
        errorResponse(res, 500, "Error in filtering dare")
    }
  }

  export const pendingDares = async(req, res ) => {
    try{
        const previousDay = subDays(new Date(), 1)
        const startOfPreviousDay = startOfDay(previousDay)
        const endOfPreviousDay = endOfDay(previousDay)
        const pendingDares = await Dare.find({
            date:{
                $gte: startOfPreviousDay,
                $lte: endOfPreviousDay,
            },
            status: 1
        })
        console.log(pendingDares)
        console.log(startOfPreviousDay)
        console.log(endOfPreviousDay)
        successResponse(res, 200, "Pending dares from the previous day retrieved successfully", pendingDares)
    }catch(err){
        errorResponse(res, 500, 'Error receiving pending dares from previous days', err)
    }
  }





