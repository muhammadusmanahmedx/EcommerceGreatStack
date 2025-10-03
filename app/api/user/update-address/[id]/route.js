import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { connectToDatabase } from "@/config/db";
import Address from "@/models/Address";

export async function PUT(request, { params }) {
    try {
        await connectToDatabase();

        const { userId } = getAuth(request);
        const { id } = params;
        const { address } = await request.json();

        if (!userId) {
            return NextResponse.json({ success: false, message: "Unauthorized" });
        }

        // Ensure we only update allowed fields (excluding state)
        const allowedFields = {
            fullName: address.fullName,
            phoneNumber: address.phoneNumber,
            pinCode: address.pinCode,
            area: address.area,
            city: address.city,
        };

        const updatedAddress = await Address.findOneAndUpdate(
            { _id: id, userId: userId },
            allowedFields,
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