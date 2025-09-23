import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import User from "@/models/Users";
import connectToDatabase from "@/config/db";


export async function POST(request){

try {
    
const {userId}=getAuth(request);
const {cartData}=await request.json();

await connectToDatabase();
const user=await User.findById(userId);

user.cartItems=cartData;
await user.save();
return NextResponse.json({success:true,message:"Cart updated successfully"})


} catch (error) {
  return  NextResponse.json({success:false,message:error.message})
}


}