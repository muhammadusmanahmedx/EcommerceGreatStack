import { getAuth } from "@clerk/nextjs/server";
import User from "@/models/Users";
import { NextResponse } from "next/server";
import connectToDatabase from "@/config/db";
import Order from "@/models/Order";
import Product from "@/models/Product";

export async function POST (request) {
try {
    const {userId}=getAuth(request);
    const {items,address}=await request.json();

    if(!address || items.length===0){
        return NextResponse.json({success:false,message:"invalid data"})
    }

    // calculate total amount
    let amount=await items.reduce(async(total,item)=>{
      const product=await Product.findById(item.productId);
        return acc+product.offerPrice*item.quantity

    },0);

    await inngest.send({
        name : "order/created",
        data :{
            userId,
            items,
            address,
            amount:amount +Math.floor(amount*0.02),
            date:Date.now(  )
        }




    })

    
        const user = await User.findById(userId);
        if (user) {
            user.cartItems = [];
            await user.save();
        }
    
       
    await connectToDatabase();
   

} catch (error) {
      return NextResponse.json({success:false,message:error.message})

    
}


}
