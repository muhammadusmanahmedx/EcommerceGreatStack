import connectToDatabase from '@/config/db';
import Product from '@/models/Product';

export async function GET(req) {
  try {
  
   

    await connectToDatabase();

    const products = await Product.find({});
    return new Response(JSON.stringify({ success: true, products }));
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
