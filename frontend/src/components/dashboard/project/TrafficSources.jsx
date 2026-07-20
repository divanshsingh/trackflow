const trafficSources = [
    {
        source: "Google",
        percentage: 48,
    },
    {
        source: "Direct",
        percentage: 30,
    },
    {
        source: "LinkedIn",
        percentage: 12,
    },
    {
        source: "Twitter",
        percentage: 10,
    },
];
export default function TrafficSources() {
    return (
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-white">
                    Traffic Sources
                </h2>

                <p className="text-sm text-zinc-400">
                    Where your visitors come from
                </p>
            </div>
            <div className="space-y-5">
                {trafficSources.map((item) => (
                <div key={item.source}>
                    <div className="mb-2 flex items-center justify-between">
                    <p className="font-medium text-white">
                        {item.source}
                    </p>
                    <p className="text-sm text-zinc-400">
                        {item.percentage}%
                    </p>
                    </div>
                                        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div
                        className="h-full rounded-full bg-blue-500"
                        style={{
                            width: `${item.percentage}%`,
                        }}
                    />
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}