"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signup } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const signupSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters"),
    email: z
        .string()
        .email("Please enter a valid email"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters"),
});


export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

    const router = useRouter();
    
    const onSubmit = async (data) => {
        try {
            const response = await signup(data);
            console.log(response);
            alert("Account created successfully!");
            router.push("/login");            
        } catch (error) {
            console.error(error);
            alert(
                error.response?.data?.message || "Something went wrong."
            );
        }
        
    };

    return (
        <>
            <div className="mb-10">
                <h1 className="text-4xl font-bold">
                    Create your account
                </h1>
                <p className="mt-3 text-zinc-400">
                    Start tracking your websites in minutes.
                </p>
            </div>

            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6">

                {/* Name */}
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Full Name
                    </label>
                    <Input
                        placeholder="John Doe"
                        {...register("name")}
                    />
                    {errors.name && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>  

                {/* Email */}
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Email
                    </label>
                    <Input
                        type="email"
                        placeholder="john@example.com"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>  

                {/* Password */}
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Password
                    </label>
                    <div className="relative">
                        <Input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="••••••••"
                            {...register("password")}
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>   


                {/* Button */}
                <Button
                    type="submit"
                    className="h-12 w-full bg-blue-600 hover:bg-blue-500"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating Account...
                        </>
                    ) : (
                        "Create Account"
                    )}
                </Button>                                                        
            </form>  
            <p className="mt-8 text-center text-sm text-zinc-400">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="font-medium text-blue-500 hover:text-blue-400"
                >
                    Sign In
                </Link>
            </p>                  
        </>
    )
}