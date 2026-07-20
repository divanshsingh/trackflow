import Link from "next/link";
import { BarChart3 } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-zinc-950">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-zinc-400 md:flex-row">
                <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-500" />
                    <span className="font-medium text-white">
                        TrackFlow
                    </span>
                </div>
                <div className="flex items-center gap-8">
                    <Link
                        href="#features"
                        className="hover:text-white"
                    >
                        Features
                    </Link>
                    <Link
                        href="/login"
                        className="hover:text-white"
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="hover:text-white"
                    >
                        Sign Up
                    </Link>
                </div>
                <p>
                    © 2026 TrackFlow
                </p>
            </div>
        </footer>
    );
}