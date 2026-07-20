"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";

export default function Navbar(){
    return(
        <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
                        <BarChart3 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold tracking-tight text-white">
                        TrackFlow
                    </span>
                </Link>  
                
                {/* Navigation */}
                <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">

                    <Link
                        href="#features"
                        className="transition hover:text-white"
                    >
                        Features
                    </Link>

                    <Link
                        href="#docs"
                        className="transition hover:text-white"
                    >
                        Docs
                    </Link>

                    <Link
                        href="#github"
                        className="transition hover:text-white"
                    >
                        Github
                    </Link>
                </nav>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <Link href="/login">
                    <Button
                        variant="ghost"
                        className="text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    >
                        Login
                    </Button>
                    </Link>
                    <Link href="/login">
                    <Button className="bg-blue-600 hover:bg-blue-500">
                        Get Started
                    </Button>
                    </Link>
                </div>  
            </div>                                            
        </header>
    )
}