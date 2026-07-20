"use client";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

const visitorData = [
    { day: "Mon", visitors: 12 },
    { day: "Tue", visitors: 19 },
    { day: "Wed", visitors: 15 },
    { day: "Thu", visitors: 28 },
    { day: "Fri", visitors: 24 },
    { day: "Sat", visitors: 35 },
    { day: "Sun", visitors: 31 },
];



export default function VisitorsChart() {
    const totalVisitors = visitorData.reduce(
    (sum, item) => sum + item.visitors,
    0
    );
    return(
        <section className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-white">
                        Visitors
                    </h2>

                    <p className="mt-1 text-3xl font-bold text-white">
                        {totalVisitors}
                    </p>

                    <p className="mt-1 text-sm text-emerald-400">
                        +12.4% from last week
                    </p>
                </div>

                <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                    Last 7 Days
                </span>
            </div>
            <div className="h-80">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <LineChart 
                    data={visitorData}
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6 }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis 
                        dataKey="day"/>
                        <YAxis />
                        <Tooltip />
                        <Line
                            // type="monotone"
                            dataKey="visitors"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    )
}