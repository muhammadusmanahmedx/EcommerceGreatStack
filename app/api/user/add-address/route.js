import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import connectToDatabase from "@/config/db";
import Address from "@/models/Address";


export async function POST(request) {
    try {
        
        const { userId } = getAuth(request);
        
        if (!userId) {
            return NextResponse.json({ success: false, message: "Unauthorized" });
        }

        const { address } = await request.json();

        console.log('Received address data:', address);
        console.log('User ID:', userId);

        // Validate required fields
        if (!address.fullName || !address.phoneNumber || !address.pinCode || !address.area || !address.city) {
            return NextResponse.json({ success: false, message: "All fields are required" });
        }

        await connectToDatabase();

        // Ensure we only use allowed fields (excluding state and any other unwanted fields)
        const allowedFields = {
            userId,
            fullName: address.fullName.trim(),
            phoneNumber: address.phoneNumber.trim(),
            pinCode: parseInt(address.pinCode),
            area: address.area.trim(),
            city: address.city.trim(),
        };

        console.log('Filtered address data:', allowedFields);

        const newAddress = await Address.create(allowedFields);

        console.log('Created address:', newAddress);

        return NextResponse.json({ success: true, message: "Details added successfully", newAddress })

    } catch (error) {
        console.error('Error creating address:', error);
        return NextResponse.json({ success: false, message: error.message })
    }

}