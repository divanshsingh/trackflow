"use client";

import { Button } from "@/components/ui/button";
import { Copy, KeyRound } from "lucide-react";
import { toast } from "sonner";

export default function ApiKeySettings({ project }) {

    const copyKey = async () => {
        await navigator.clipboard.writeText(project.apiKey);
        toast.success("API Key copied!");
    };

    return (
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <div className="flex items-center gap-3">
                <KeyRound className="h-5 w-5 text-blue-500" />

                <h2 className="text-xl font-semibold text-white">
                    API Key
                </h2>
            </div>

            <p className="mt-2 text-sm text-zinc-400">
                Use this key inside your tracking script.
            </p>

            <div className="mt-6 rounded-xl bg-black p-4">
                <code className="break-all text-green-400">
                    {project.apiKey}
                </code>
            </div>

            <Button
                onClick={copyKey}
                className="mt-5 bg-blue-600 hover:bg-blue-500"
            >
                <Copy className="mr-2 h-4 w-4" />
                Copy API Key
            </Button>

        </section>
    );
}