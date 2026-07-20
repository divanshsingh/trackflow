"use client";
import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
    return (
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-8 backdrop-blur-xl">
            {/* Left */}
            <div>
                <h1 className="text-2xl font-bold text-white">
                    Welcome back 👋
                </h1>
                <p className="mt-1 text-sm text-zinc-400">
                    {today}
                </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
                {/* Search */}
                <div className="hidden items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 lg:flex">
                    <Search className="h-4 w-4 text-zinc-500" />
                    <input
                        placeholder="Search..."
                        className="bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                    />
                </div>
                
                {/* Notification */}
                <button className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 transition hover:bg-zinc-800">
                    <Bell className="h-5 w-5 text-zinc-300" />
                </button>
                {/* Avatar */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 font-semibold text-white">
                    D
                </div>
            </div>            
        </header>        
    )
}