"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

function VerifyOtpContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "";

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const handleVerify = async (e) => {
        e.preventDefault();
        if (!otp || otp.length < 6) {
            toast.error("Please enter a valid 6-digit OTP");
            return;
        }

        try {
            setLoading(true);
            const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
            const response = await axios.post(
                `${API_URL}/api/auth/signup`,
                { email, otp },
                { withCredentials: true } // Cookie set karne ke liye zaroori hai
            );

            console.log(response.data);
            toast.success("Email verified successfully!");
            router.push("/dashboard"); // Verify hone ke baad dashboard par bhej denge
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Invalid OTP");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white px-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Verify Your Email</h1>
                    <p className="mt-2 text-sm text-zinc-400">
                        We have sent a 6-digit OTP to <span className="text-white font-medium">{email}</span>
                    </p>
                </div>

                <form onSubmit={handleVerify} className="space-y-4">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-300">
                            Enter OTP
                        </label>
                        <Input
                            type="text"
                            maxLength={6}
                            placeholder="123456"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="text-center tracking-widest text-lg"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-11 bg-blue-600 hover:bg-blue-500 font-medium"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Verifying...
                            </>
                        ) : (
                            "Verify OTP"
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default function VerifyOtpPage() {
    return (
        <Suspense fallback={<div className="text-white text-center mt-20">Loading...</div>}>
            <VerifyOtpContent />
        </Suspense>
    );
}