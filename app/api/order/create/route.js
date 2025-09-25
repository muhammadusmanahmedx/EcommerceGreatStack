import { getAuth } from "@clerk/nextjs/server";
import User from "@/models/Users";
import { NextResponse } from "next/server";
import connectToDatabase from "@/config/db";
import Order from "@/models/Order";
import Product from "@/models/Product";
import { inngest } from "@/config/inngest";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const { items, address } = await request.json();

    if (!address || !items || items.length === 0) {
      return NextResponse.json({ success: false, message: "Invalid data" });
    }

    // connect DB
    await connectToDatabase();

    // calculate total amount properly
    let amount = 0;
    for (const item of items) {
      const product = await Product.findById(item.product); // lowercase "product"
      if (!product) continue;
      amount += product.offerPrice * item.quantity;
    }

    // create order in DB
    const order = await Order.create({
  userId,
  items: items.map((i) => ({
    product: i.productId || i.product, // must be ObjectId
    quantity: i.quantity,
  })),
  address: address._id || address, // must be ObjectId
  amount: amount + Math.floor(amount * 0.02),
  date: Date.now(),
});


    // send event to inngest
    await inngest.send({
      name: "order/created",
      data: order.toObject(), // send whole order data
    });

    // clear user cart
    const user = await User.findById(userId);
    if (user) {
      user.cartItems = {};
      await user.save();
    }

    return NextResponse.json({ success: true, message: "Order placed successfully", order });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message });
  }
}
