"use client";

import {
    Users,
    Activity,
    MousePointerClick,
    Clock3,
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";

export default function OverviewCards({overview}) {
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
        title: "Avg Pages / Session",
        value: overview?.averagePagesPerSession ?? 0,
        icon: Clock3,
    },
];
    
    return (
        <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
                <StatCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    icon={stat.icon}
                />
            ))}
        </section>
    );
}