

import { products } from "@/assets/productData";
import mongoose from "mongoose";

export const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true, ref: "user" },
Items:
[{
        product: { type: String, required: true, ref: "product" },
        quantiy: { type: Number, required: true },
}],
amount:{ type: Number, required: true },
address:{ type: String, required: true,ref:"address" },
status:{ type: String, required: true, default:"pending" },
date:{ type: Number, required:true, default:Date.now() },
   
});

const Order = mongoose.models.order || mongoose.model("order", orderSchema);

export default Order