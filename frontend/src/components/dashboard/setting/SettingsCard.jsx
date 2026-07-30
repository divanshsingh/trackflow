"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Globe,
    Settings,
    ChevronRight,
    Activity,
} from "lucide-react";

export default function SettingsCard({ project }) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-700">

            <div className="flex items-start justify-between">

                <div>
                    <h2 className="text-xl font-semibold text-white">
                        {project.name}
                    </h2>

                    <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
                        <Globe className="h-4 w-4" />
                        {project.domain}
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                        <Activity
                            className={`h-4 w-4 ${
                                project.trackingStatus
                                    ? "text-green-500"
                                    : "text-orange-500"
                            }`}
                        />

                        <span
                            className={`text-sm ${
                                project.trackingStatus
                                    ? "text-green-400"
                                    : "text-orange-400"
                            }`}
                        >
                            {project.trackingStatus
                                ? "Tracking Active"
                                : "Not Tracking"}
                        </span>
                    </div>
                </div>

                <Link href={`/dashboard/projects/${project.id}/settings`}>
                    <Button className="bg-blue-600 hover:bg-blue-500">
                        <Settings className="mr-2 h-4 w-4" />
                        Manage
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>

            </div>

        </div>
    );
}