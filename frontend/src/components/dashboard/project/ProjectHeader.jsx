"use client";

import { Globe, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ProjectHeader({ project }) {
    const copyApiKey = async () => {
        await navigator.clipboard.writeText(project.apiKey);
        toast.success("API Key copied!");
    };

    return (
        <section className="flex flex-col justify-between gap-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 lg:flex-row lg:items-center">
            {/* Left */}
            <div>
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-500/10 p-3">
                        <Globe className="h-6 w-6 text-blue-500" />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-white">
                            {project.name}
                        </h1>
                            <a
                                href={project.domain}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 inline-block text-zinc-400 hover:text-blue-400"
                            >
                                {project.domain}
                            </a>
                    </div>
                </div>

                <p className="mt-6 text-sm text-zinc-500">
                    Created{" "}
                    {new Date(project.createdAt).toLocaleDateString()}
                </p>
            </div>

            {/* Right */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                    API Key
                </p>

                <p className="mt-2 font-mono text-sm text-blue-400">
                    {`${project.apiKey.slice(0, 8)}••••••••••••`}
                </p>

                <Button
                    onClick={copyApiKey}
                    className="mt-5 w-full bg-blue-600 hover:bg-blue-500"
                >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy API Key
                </Button>
            </div>
        </section>
    );
}