import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { connectToDatabase } from "@/config/db";
import Address from "@/models/Address";

export async function DELETE(request, { params }) {
    try {
        await connectToDatabase();

        const { userId } = getAuth(request);
        const { id } = params;

        if (!userId) {
            return NextResponse.json({ success: false, message: "Unauthorized" });
        }

        const deletedAddress = await Address.findOneAndDelete({
            _id: id,
            userId: userId
        });

        if (!deletedAddress) {
            return NextResponse.json({ success: false, message: "Address not found" });
        }

        return NextResponse.json({ 
            success: true, 
            message: "Details deleted successfully" 
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    }
}