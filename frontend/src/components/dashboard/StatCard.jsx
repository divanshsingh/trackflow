import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({
    title,
    value,
    change,
    positive = true,
    icon: Icon,
}) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-zinc-400">
                        {title}
                    </p>
                    <h3 className="mt-3 text-3xl font-bold text-white">
                        {value}
                    </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800">
                    <Icon className="h-6 w-6 text-blue-500" />
                </div>
            </div>
            <div className="mt-6 flex items-center gap-2">
                {positive ? (
                    <ArrowUpRight className="h-4 w-4 text-green-400" />
                ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-400" />
                )}
                <span
                    className={`text-sm font-medium ${
                        positive
                            ? "text-green-400"
                            : "text-red-400"
                    }`}
                >
                    {change}
                </span>
                <span className="text-sm text-zinc-500">
                    vs last week
                </span>
            </div>
        </div>
    );
}