"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart3, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ user }) {

    const [show, setShow] = useState(true);
const lastScrollY = useRef(0);

useEffect(() => {

    const handleScroll = () => {

        const current = window.scrollY;

        if (current > lastScrollY.current && current > 80) {

            setShow(false); // move navbar out of the viewport

        } else {

            setShow(true); // bring it back

        }

        lastScrollY.current = current;

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

}, []);
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
    }`}>
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-3"
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-105">
                        <BarChart3 className="h-5 w-5 text-white" />
                    </div>

                    <span className="text-2xl font-bold tracking-tight text-white">
                        TrackFlow
                    </span>
                </Link>

                {/* Center Navigation */}

                <nav className="hidden items-center gap-10 md:flex">

                    <Link
                        href="#features"
                        className="text-sm font-medium text-zinc-400 transition hover:text-white"
                    >
                        Features
                    </Link>

                    <Link
                        href="/docs"
                        className="text-sm font-medium text-zinc-400 transition hover:text-white"
                    >
                        Documentation
                    </Link>

                    <Link
                        href="https://github.com/divanshsingh/trackflow"
                        target="_blank"
                        className="text-sm font-medium text-zinc-400 transition hover:text-white"
                    >
                        GitHub
                    </Link>

                </nav>

                {/* Right Side */}

                {!user ? (
                    <div className="flex items-center gap-3">

                        <Link href="/login">
                            <Button
                                variant="ghost"
                                className="text-zinc-300 hover:bg-white/5 hover:text-white"
                            >
                                Login
                            </Button>
                        </Link>

                        <Link href="/signup">
                            <Button className="rounded-xl bg-blue-600 px-5 hover:bg-blue-500">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>

                    </div>
                ) : (
                    <Link href="/dashboard">
                        <Button className="rounded-xl bg-blue-600 px-5 hover:bg-blue-500">
                            Go to Dashboard
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                )}

            </div>
        </header>
    );
}