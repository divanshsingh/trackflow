"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function InstallationSection({ apiKey }) {
    const script = useMemo(() => {
        return `<script
  src="${process.env.NEXT_PUBLIC_TRACKER_URL}/tracker.js"
  data-api-key="${apiKey}">
</script>`;
    }, [apiKey]);

    const copyScript = async () => {
        await navigator.clipboard.writeText(script);
        toast.success("Tracking script copied!");
    };

    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-xl font-semibold text-white">
                Installation
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
                Install the TrackFlow tracker on your website to start
                collecting analytics.
            </p>

            <div className="mt-6 space-y-3 text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                    <span>Copy the tracking script.</span>
                </div>

                <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                    <span>Paste it just before the closing &lt;/body&gt; tag.</span>
                </div>

                <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                    <span>Deploy your website.</span>
                </div>

                <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                    <span>Visit your website once to activate tracking.</span>
                </div>
            </div>

            <div className="mt-6 rounded-xl bg-black p-4">
                <pre className="overflow-x-auto text-sm text-green-400">
                    <code>{script}</code>
                </pre>
            </div>
            <div className="flex items-center gap-2">
<Button
                className="mt-5 bg-blue-600 hover:bg-blue-500"
                onClick={copyScript}
            >
                <Copy className="mr-2 h-4 w-4" />
                Copy Script
            </Button>
            <Link href="/docs">
            <Button
                className="mt-5 border border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 pt-3 pb-3"
            >
                View Documentation
            </Button>   
            </Link>
            </div>         
        </div>
    );
}