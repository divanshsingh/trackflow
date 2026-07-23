"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard } from "lucide-react";

export default function LoggedInCTA() {
    return (
        <section className="border-t border-zinc-800 bg-zinc-950 py-24">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1 text-sm text-green-400">
                    Welcome Back 👋
                </div>

                <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
                    Continue Monitoring Your Websites
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
                    Your analytics dashboard is ready. Monitor visitors,
                    sessions, traffic sources, and website performance in
                    real-time.
                </p>

                <div className="mt-10">
                    <Link href="/dashboard">
                        <Button className="h-12 rounded-xl bg-blue-600 px-8 font-medium hover:bg-blue-500">
                            <LayoutDashboard className="mr-2 h-5 w-5" />
                            Go to Dashboard
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}