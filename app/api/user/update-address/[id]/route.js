import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectToDB } from "@/config/db";
import Address from "@/models/Address";

export async function PUT(request, { params }) {
    try {
        await connectToDB();

        const { id } = params;
        const { address } = await request.json();
        const token = request.headers.get("Authorization")?.split(" ")[1];

        if (!token) {
            return NextResponse.json({ success: false, message: "Token not found" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const updatedAddress = await Address.findOneAndUpdate(
            { _id: id, userId: userId },
            address,
            { new: true }
        );

        if (!updatedAddress) {
            return NextResponse.json({ success: false, message: "Address not found" });
        }

        return NextResponse.json({ 
            success: true, 
            message: "Details updated successfully",
            address: updatedAddress 
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    }
}