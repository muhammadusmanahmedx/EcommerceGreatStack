import { useAuth } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectToDatabase from "@/config/db";
import User from "@/models/Users";


export async function GET(request) {
    try {

        const { userId } = getAuth(request)

        await connectToDatabase();
        const user = await User.findById(userId);


        if (!user) {
            return NextResponse.json({ success: "false", message: "User not found" })
        }
        return NextResponse.json({ success: "true", user })

    } catch (error) {
        return NextResponse.json({ success: "false", message: error.message })
    }




}