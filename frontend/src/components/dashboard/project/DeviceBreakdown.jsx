const devices = [
    {
        device: "Desktop",
        percentage: 68,
    },
    {
        device: "Mobile",
        percentage: 27,
    },
    {
        device: "Tablet",
        percentage: 5,
    },
];
export default function DeviceBreakdown() {
    return (
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-white">
                    Device Breakdown
                </h2>

                <p className="text-sm text-zinc-400">
                    Devices your visitors use
                </p>
            </div>
            <div className="space-y-5">
    {devices.map((device) => (
        <div key={device.device}>

            <div className="mb-2 flex items-center justify-between">
                <p className="font-medium text-white">
                    {device.device}
                </p>

                <p className="text-sm text-zinc-400">
                    {device.percentage}%
                </p>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                <div
                    className="h-full rounded-full bg-blue-500"
                    style={{
                        width: `${device.percentage}%`,
                    }}
                />
            </div>

        </div>
    ))}
</div>
        </section>
    );
}