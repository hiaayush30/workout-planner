import { Gender } from "@prisma/client";
import "next-auth";
import { DefaultSession } from "next-auth";
declare module "next-auth" {
    interface Session {
        user: {
            email: string;
            name: string,
            id: string;
            profilePic: string;
            gender: Gender | null,
            createdAt: Date;
            age: number | null;
            height: number | null;
            weight: number | null;
            maintainence_cal: number | null;
        } & DefaultSession['user']
    }
    interface User {
        email: string;
        name: string;
        id: string;
        profilePic: string;
        gender: Gender | null;
        createdAt: Date;
        password: string;
        height: number | null;
        weight: number | null;
        maintainence_cal?: number | null;
    }

}