import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="bg-zinc-950 px-6 py-28">
            <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-900 px-8 py-20 text-center">

                <h2 className="text-4xl font-bold text-white">
                    Ready to start tracking?
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
                    Set up your first project in under 2 minutes and start analysing
                   website in just a few clicks.
                </p>

                <Link href="/signup">
                    <Button
                        size="lg"
                        className="mt-10 bg-blue-600 hover:bg-blue-500"
                    >
                        Create Free Account
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </section>
    );
}