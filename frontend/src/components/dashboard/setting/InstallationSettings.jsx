"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export default function InstallationSettings({ project }) {

    const script = `<script
src="${process.env.NEXT_PUBLIC_TRACKER_URL}/tracker.js"
data-api-key="${project.apiKey}">
</script>`;

    const copyScript = async () => {
        await navigator.clipboard.writeText(script);
        toast.success("Tracking script copied!");
    };

    return (
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <h2 className="text-xl font-semibold text-white">
                Installation
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
                Install this script before the closing &lt;/body&gt; tag.
            </p>

            <div className="mt-6 rounded-xl bg-black p-4">
                <pre className="overflow-x-auto text-sm text-green-400">
                    {script}
                </pre>
            </div>

            <Button
                onClick={copyScript}
                className="mt-5 bg-blue-600 hover:bg-blue-500"
            >
                <Copy className="mr-2 h-4 w-4" />
                Copy Script
            </Button>

        </section>
    );
}