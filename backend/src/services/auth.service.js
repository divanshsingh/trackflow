import prisma from "../lib/prisma.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import { sendVerificationEmail } from "../utils/sendEmail.js";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const signupService = async ({name, email, password}) => {
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if(existingUser){
        if(existingUser.isVerified){
            throw new Error("User already exists");
        }
        //user exist but not verified so:
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 min

        await prisma.user.update({
            where: {email},
            data: {
                verificationOtp: otp,
                otpExpiresAt,
            }
        })
        
        await sendVerificationEmail(email, otp);
        return {message: "OTP re-sent to your email", email};
    }    

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            isVerified: false,
            verificationOtp: otp,
            otpExpiresAt,
        }
    })

    // email send krna
    await sendVerificationEmail(email, otp);
    return {
        id: user.id,
        name: user.name,
        email: user.email,
    };
};
// 2. VERIFY OTP: OTP check karke isVerified true karega aur Login token dega

export const verifyOtpService = async ({email, otp}) => {
    const user = await prisma.user.findUnique({ where: { email }});
    
    if(!user){
        throw new Error("User not found");
    }

    if(user.isVerified){
        throw new Error("User is already verified. Please login.");
    }

    if(user.verificationOtp !== otp){
        throw new Error("Invalid OTP");
    }

    if(new Date() > new Date(user.otpExpiresAt)){
        throw new Error("OTP has expired. Please request a new one.");
    }

    // Verification clear karna
    const updateUser = await prisma.user.update({
        where: { email },
        data: {
            isVerified: true,
            verificationOtp: null,
            otpExpiresAt: null
        }
    })

    const token = jwt.sign({ id: updateUser.id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    return{
        user: {
            id: updateUser.id,
            name: updateUser.name,
            email: updateUser.email
        },
        token
    }
}

export const loginService = async ({email, password}) => {
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!existingUser) {
    throw new Error("Email or password do not match");
    }

    // Google user bina password ke login karne ki koshish kare
    if(!existingUser.password){
        throw new Error("Please log in using Google")
    }

    const result = await bcrypt.compare(password, existingUser.password);
    
    if (!result) {
    throw new Error("Email or password do not match");
    }

    if(!existingUser.isVerified){
        throw new Error("Please verify your email before logging in.")
    }

    const token = jwt.sign(
        { id: existingUser.id },
        process.env.JWT_SECRET,
        { expiresIn: "7d", },
    )

    return {
        user: {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
        },
        token,
        };
};
// 4. GOOGLE AUTH SERVICE: Google token verify karke user login/create karega
export const googleAuthService = async (idToken) => {
    const ticket = await googleClient.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload();
    const {email, name, sub: googleId} = payload;

    let user = await prisma.user.findUnique({
        where: { email }
    });

    if(!user){
        // Naya user create karein (Google users pehle se verified hote hain)
        // Agar schema me password non-null hai toh dummy random hash pass karein
        const dummyPassword = await bcrypt.hash(Math.random().toString(36), 10);
        user = await prisma.user.create({
            data: {
                name,
                email,
                password: dummyPassword,
                googleId,
                isVerified: true,
            }
        })
    }else if(!user.googleId){
        // Agar pehle email/password se account banaya tha, toh googleId link kar dein
        user = await prisma.user.update({
            where: { email },
            data: { googleId, isVerified: true},
        })
    }
    
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })

    return{
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        token,
    }
}

export const deleteUserService = async(userId) => {
    const user = await prisma.user.findUnique({ where: { id: userId }});
    if(!user){
        throw new Error("User not found");
    }
    await prisma.user.delete({
        where: { id: userId },
    })

    return { message: "User account deleted successfully"};
}


export const getMeService = async (userId) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },        
        select: {
            id: true,
            name: true,
            email: true,
        },
    })
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}