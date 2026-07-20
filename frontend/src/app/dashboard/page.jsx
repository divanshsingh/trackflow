import {
    Users,
    Activity,
    MousePointerClick,
    Clock3,
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import ProjectsSection from "@/components/dashboard/ProjectsSection";

const stats = [

    {
        title: "Visitors",
        value: "12,481",
        change: "+12%",
        positive: true,
        icon: Users,
    },

    {
        title: "Sessions",
        value: "8,294",
        change: "+4%",
        positive: true,
        icon: Activity,
    },

    {
        title: "Page Views",
        value: "41,202",
        change: "+18%",
        positive: true,
        icon: MousePointerClick,
    },

    {
        title: "Avg. Session",
        value: "2m 14s",
        change: "-6%",
        positive: false,
        icon: Clock3,
    },
];

export default function DashboardPage() {
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