"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const data = [
    { month: "Jan", visitors: 4200 },
    { month: "Feb", visitors: 5100 },
    { month: "Mar", visitors: 4700 },
    { month: "Apr", visitors: 6200 },
    { month: "May", visitors: 6900 },
    { month: "Jun", visitors: 8400 },
];

export default function DashboardChart() {
    return (
        <ResponsiveContainer width="100%" height={320}>
            <LineChart data={data}>

                <CartesianGrid
                    stroke="#27272a"
                    strokeDasharray="4 4"
                />

                <XAxis
                    dataKey="month"
                    stroke="#71717a"
                    tickLine={false}
                    axisLine={false}
                />

                <YAxis
                    stroke="#71717a"
                    tickLine={false}
                    axisLine={false}
                />

                <Tooltip
                    contentStyle={{
                        background: "#18181b",
                        border: "1px solid #27272a",
                        borderRadius: "12px",
                    }}
                />

                <Line
                    type="monotone"
                    dataKey="visitors"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{
                        r: 4,
                        fill: "#3b82f6",
                    }}
                    activeDot={{
                        r: 7,
                    }}
                />

            </LineChart>
        </ResponsiveContainer>
    );
}