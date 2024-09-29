import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://greaterstack:1234567890@cluster0.ubxuw.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}