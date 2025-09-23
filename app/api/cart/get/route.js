
import { getAuth } from "@clerk/nextjs/server";
import User from "@/models/Users";
import connectToDatabase from "@/config/db";    
import { NextResponse } from "next/server";


export async function GET(request) {

    try {
        
        const {userId}=getAuth(request);
        await connectToDatabase();
        const user=await User.findById(userId);

        const {cartItems}=user

  
        return NextResponse.json({success:true,cartItems})


    } catch (error) {
         NextResponse.json({success:false,message:error.message})
        
    }

}