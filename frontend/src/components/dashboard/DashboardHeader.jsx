"use client";
import { getMe } from "@/services/auth.service";
import { useQuery } from "@tanstack/react-query";


export default function DashboardHeader() {
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
    const { data } = useQuery({
        queryKey: ["me"],
        queryFn: getMe,
    })
    const user = data?.data;
    return (
        <header className="sticky top-0 z-30 flex h-23 items-center justify-between border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl px-6 py-6">
            {/* Left */}
            <div>
                <h1 className="text-2xl font-bold text-white">
                    Hi {user?.name.toUpperCase()} 👋
                </h1>
                <p className="mt-1 text-sm text-zinc-400">
                    {today}
                </p>
            </div>

            {/* Right */}
            <div className="flex items-center">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 font-semibold text-white">
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <p className="font-medium text-white">{user?.name.toUpperCase()}</p>
                    </div>
                </div>
            </div>       
        </header>        
    )
}