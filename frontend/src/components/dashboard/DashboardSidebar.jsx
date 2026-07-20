"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BarChart3,
    LayoutDashboard,
    FolderKanban,
    ChartColumn,
    Settings,
    LogOut,
} from "lucide-react";

const menuItems = [
    {
        name: "Overview",
        href: "/dashboard",
        icon: LayoutDashboard,
    },

    {
        name: "Projects",
        href: "/dashboard/projects",
        icon: FolderKanban,
    },

    {
        name: "Analytics",
        href: "/dashboard/analytics",
        icon: ChartColumn,
    },

    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },

];
export default function DashboardSidebar() {
    const pathname = usePathname();
    return (
        <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-zinc-950">
            {/* Logo */}
            <div className="border-b border-zinc-800 px-6 py-6">
                <Link
                    href="/dashboard"
                    className="flex items-center gap-3"
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                        <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white">
                            TrackFlow
                        </h2>
                        <p className="text-xs text-zinc-500">
                            Analytics Platform
                        </p>
                    </div>
                </Link>
            </div>  


            {/* Navigation */}
            <nav className="flex-1 space-y-2 px-4 py-6">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200
                            ${
                                pathname === item.href
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                            }`}
                        >
                            <Icon
                            className={`h-5 w-5 transition-transform duration-200 ${
                                pathname === item.href ? "scale-110" : ""
                            }`}
                            />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Logout */}
            <div className="border-t border-zinc-800 p-4">
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 transition-all hover:bg-red-500/10 hover:text-red-400">
                    <LogOut className="h-5 w-5" />
                    Logout
                </button>
            </div>                      
        </aside>
    )
}    