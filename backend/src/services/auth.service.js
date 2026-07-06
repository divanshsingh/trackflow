import prisma from "../lib/prisma.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupService = async ({name, email, password}) => {
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if(existingUser){
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })
    return user;
};

export const loginService = async ({email, password}) => {
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!existingUser) {
    throw new Error("Email or password do not match");
    }

    const result = await bcrypt.compare(password, existingUser.password);
    
    if (!result) {
    throw new Error("Email or password do not match");
    }

    const token = jwt.sign(
        { id: existingUser.id }, process.env.JWT_SECRET, { expiresIn: "7d", },
    )

    return {
        user: {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
        },
        token,
        };
}