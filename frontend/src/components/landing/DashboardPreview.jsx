import {
  Activity,
  Users,
  MousePointerClick,
  Clock3,
} from "lucide-react";

import DashboardChart from "./DashboardChart";

const stats = [
  {
    title: "Visitors",
    value: "12.4K",
    change: "+18%",
    icon: Users,
  },
  {
    title: "Sessions",
    value: "8.2K",
    change: "+9%",
    icon: Activity,
  },
  {
    title: "Page Views",
    value: "41.8K",
    change: "+24%",
    icon: MousePointerClick,
  },
  {
    title: "Avg. Session",
    value: "2m 14s",
    change: "+7%",
    icon: Clock3,
  },
];

const chart = [90, 110, 95, 140, 130, 170, 160, 210, 190, 240, 220, 270];

export default function DashboardPreview() {
  return (
    <section className="relative -mt-32 bg-zinc-950 px-6 pb-28">
      <div className="mx-auto max-w-7xl">

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900 shadow-[0_25px_80px_rgba(0,0,0,.45)]">

          {/* Stats */}

          <div className="grid grid-cols-2 border-b border-white/10 md:grid-cols-4">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="border-white/10 p-6 transition hover:bg-zinc-800/40 md:border-r last:border-r-0"
                >
                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                      <Icon className="h-5 w-5 text-blue-500" />
                    </div>

                    <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400">
                      {stat.change}
                    </span>

                  </div>

                  <p className="mt-5 text-sm text-zinc-400">
                    {stat.title}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-xs text-zinc-500">
                    vs last week
                  </p>

                </div>
              );
            })}

          </div>

          {/* Chart */}

          <div className="border-b border-white/10 p-8">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-white">
                        Analytics Overview
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">
                        Visitor trend over the last 6 months
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm text-zinc-400">
                        Live
                    </span>
                </div>
              <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
                ▲ 18%
              </span>

            </div>

            <DashboardChart />

          </div>

          {/* Bottom */}

          <div className="grid gap-8 p-8 lg:grid-cols-2">

            {/* Top Pages */}

            <div>

              <h3 className="mb-5 text-lg font-semibold text-white">
                Top Pages
              </h3>

              {[
                ["/", "8.2K"],
                ["/pricing", "4.6K"],
                ["/docs", "3.1K"],
                ["/blog", "1.8K"],
              ].map(([page, views]) => (
                <div
                  key={page}
                  className="flex items-center justify-between border-b border-white/5 py-4 last:border-none"
                >
                  <span className="font-medium text-zinc-300">
                    {page}
                  </span>

                  <span className="text-sm text-zinc-500">
                    {views}
                  </span>

                </div>
              ))}

            </div>

            {/* Referrers */}

            <div>

              <h3 className="mb-5 text-lg font-semibold text-white">
                Top Referrers
              </h3>

              {[
                ["Google", "52%"],
                ["Direct", "27%"],
                ["Twitter", "13%"],
                ["LinkedIn", "8%"],
              ].map(([source, percent]) => (
                <div
                  key={source}
                  className="flex items-center justify-between border-b border-white/5 py-4 last:border-none"
                >
                  <span className="font-medium text-zinc-300">
                    {source}
                  </span>

                  <span className="text-sm text-zinc-500">
                    {percent}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}