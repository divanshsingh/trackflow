"use client";

import { Globe, Copy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";

export default function ProjectCard({ project }) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-white">
                        {project.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
                        <Globe className="h-4 w-4" />
                        <span>{project.domain}</span>
                    </div>
                </div>

                <div className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                    Active
                </div>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-zinc-800" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                        Visitors
                    </p>

                    <h4 className="mt-2 text-2xl font-bold text-white">
                        0
                    </h4>
                </div>

                <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                        API Key
                    </p>

                    <p className="mt-2 font-mono text-sm text-zinc-300">
                        {project.apiKey.slice(0, 10)}...
                    </p>
                </div>

                <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                        Status
                    </p>

                        {(project.trackingStatus) ? 
                        <p className="mt-2 font-medium text-green-400">
                            "Tracking Active"
                        </p> : 
                        <p className="mt-2 font-medium text-orange-400">
                            "Not Tracking"
                        </p>}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between">
                <Button
                    variant="outline"
                    className="border-zinc-700 bg-zinc-900 hover:bg-zinc-800"
                    onClick={() => {
                        navigator.clipboard.writeText(project.apiKey);
                        toast.success("API Key copied!");
                    }}
                >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy API Key
                </Button>

                <Link href={`/dashboard/projects/${project.id}`}>
                    <Button className="bg-blue-600 hover:bg-blue-500">
                        Analytics
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}