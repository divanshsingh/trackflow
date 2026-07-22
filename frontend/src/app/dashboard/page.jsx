"use client"

import {
    Users,
    Activity,
    MousePointerClick,
    Clock3,
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import ProjectsSection from "@/components/dashboard/ProjectsSection";
import { getDashboardOverview } from "@/services/analytics.service";
import { useQuery } from "@tanstack/react-query";


export default function DashboardPage() {
        const { data, isLoading } = useQuery({
        queryKey: ["dashboard-overview"],
        queryFn: getDashboardOverview,
    });
    const overview = data?.data;
    const stats = [
        {
            title: "Visitors",
            value: overview?.totalVisitors ?? 0,
            icon: Users,
        },
        {
            title: "Sessions",
            value: overview?.totalSessions ?? 0,
            icon: Activity,
        },
        {
            title: "Page Views",
            value: overview?.totalPageViews ?? 0,
            icon: MousePointerClick,
        },
        {
            title: "Pages / Session",
            value: overview?.averagePagesPerSession ?? 0,
            icon: Clock3,
        },
    ];
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-white">
                    Overview
                </h2>
                <p className="mt-2 text-zinc-400">
                    Here's what's happening across your projects.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                    <StatCard
                        key={stat.title}
                        {...stat}
                    />
                ))}
            </div>
            <ProjectsSection />
        </div>
    );
}