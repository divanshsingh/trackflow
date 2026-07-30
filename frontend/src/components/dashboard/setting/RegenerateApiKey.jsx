"use client";

import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

export default function RegenerateApiKey() {
    return (
        <section className="rounded-2xl border border-yellow-800 bg-yellow-950/20 p-6">

            <h2 className="text-xl font-semibold text-yellow-400">
                Regenerate API Key
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
                Your current API key will stop working immediately.
                Update your tracker script after regenerating.
            </p>

            <Button className="mt-6 bg-yellow-600 hover:bg-yellow-500">
                <RotateCcw className="mr-2 h-4 w-4" />
                Regenerate API Key
            </Button>

        </section>
    );
}