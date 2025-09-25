import { getAuth } from "@clerk/nextjs/server";
import User from "@/models/Users";
import { NextResponse } from "next/server";
import connectToDatabase from "@/config/db";
import Product from "@/models/Product";
import { inngest } from "@/config/inngest";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const { items, address } = await request.json();

    if (!address || !items || items.length === 0) {
      return NextResponse.json({ success: false, message: "Invalid data" }, { status: 400 });
    }

    await connectToDatabase();

    // calculate total amount
    let amount = 0;
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
      }
      amount += product.offerPrice * item.quantity;
    }

    const totalAmount = amount + Math.floor(amount * 0.02);

    // Send order event
    await inngest.send({
      name: "order/created",
      data: {
        userId,
        items,
        address,
        amount: totalAmount,
        date: Date.now(),
      },
    });

    // Clear user cart
    const user = await User.findOne({ clerkId: userId });
    if (user) {
      user.cartItems = {};
      await user.save();
    }

    return NextResponse.json({
      success: true,
      message: "Order placed successfully",
      amount: totalAmount,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}