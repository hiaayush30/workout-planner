import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const NewUserSchema = z.object({
    name: z.string().min(3, { message: "Minimum 33 characters required" }),
    email: z.email(),
    password: z.string().min(3, { message: "Minimum 3 characters required" })
})

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const parsedData = NewUserSchema.safeParse(body);
        if (!parsedData.success) {
            console.log(parsedData.error.issues)
            return NextResponse.json({
                error: "Invalid Request"
            }, { status: 400 })
        }
        const { email, name, password } = parsedData.data;
        const existingUser = await prisma.user.findFirst({
            where: {
                email
            }
        })
        if (existingUser) {
            return NextResponse.json({
                error: "email already registered!"
            }, { status: 403 })
        }
        const hashedPassword = await bcrypt.hash(password, 5);
        await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
                profilePic: `https://avatar.iran.liara.run/username?username=${name}`
            }
        })
        return NextResponse.json({
            message: "user registered successfully!"
        }, { status: 201 })

    } catch (error) {
        console.log("Error in register route:", error)
        return NextResponse.json({
            error: "Internal server error"
        }), { status: 500 }
    }
}