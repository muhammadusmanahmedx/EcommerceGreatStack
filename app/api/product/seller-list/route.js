import connectToDatabase from '@/config/db'
import authSeller from '@/lib/authSeller'
import { getAuth } from '@clerk/nextjs/server';
import Product from '@/models/Product';

export async function GET(req) {
  try {
    const { userId } = getAuth(req);

    const isSeller = await authSeller(userId);
    if (!isSeller) {
      return new Response(
        JSON.stringify({ success: false, message: "Unauthorized Access" }),
        { status: 401 }
      );
    }

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
