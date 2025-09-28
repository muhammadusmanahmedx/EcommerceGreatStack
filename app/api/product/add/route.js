import {v2 as cloudinary} from 'cloudinary';
import {getAuth} from '@clerk/nextjs/server';
import authSeller from '@/lib/authSeller';
import connectToDatabase from '@/config/db';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
   
})

export async function POST(req) {

try {
    
const {userId}=getAuth(req);
const isSeller=await authSeller(userId);

if(!isSeller){
    return new Response(JSON.stringify({success:false,message:"Unauthorized Access"}))
}
const formData=await req.formData();

const name=formData.get('name');
const description=formData.get('description');
const category = formData.get('category');

const price=formData.get('price');
const offerPrice=formData.get('offerPrice');
const stockStatus=formData.get('stock');
const stock = stockStatus === 'instock' ? 1 : 0;


const files = formData.getAll('images');
if(!files||files.length===0){
    return new Response(JSON.stringify({success:false,message:"no files uploaded"}))
}

const result= await Promise.all(
    files.map(async(file)=>{
        const arrayBuffer=await file.arrayBuffer();
        const buffer=Buffer.from(arrayBuffer);

return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
        { resource_type: "auto" },
        (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        }
    );
    stream.end(buffer);
});

    })

)
const imageUrl=result.map((res)=>res.secure_url);
await connectToDatabase()
const newProduct=await Product.create({
    userId,
    name,
    description,
    category,
    price:Number(price),
      offerPrice:Number(offerPrice),
    stock:stock,
    image:imageUrl,
    date:Date.now(),
})

return NextResponse.json({success:true,message:"Product added successfully",product:newProduct})

} catch (error) {
    return NextResponse.json({success:false,message:error.message})

    
}


}