import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import connectToDatabase from "@/config/db";
import Address from "@/models/Address";
import Order from "@/models/Order";
import Product from "@/models/Product";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);
    await connectToDatabase();

    // fetch user orders
    const orders = await Order.find({ userId });

    // manually join product + address info
    const enrichedOrders = await Promise.all(
      orders.map(async (order) => {
        // get address
        const address = await Address.findById(order.address).lean();

        // get products inside items
        const items = await Promise.all(
          order.items.map(async (item) => {   // ✅ lowercase
            const product = await Product.findById(item.product).lean();
            return {
              ...item.toObject?.() ?? item, // safeguard if plain object
              product, // attach product details
            };
          })
        );

        return {
          ...order.toObject(),
          address,
          items,
        };
      })
    );

    return NextResponse.json({ success: true, orders: enrichedOrders });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
