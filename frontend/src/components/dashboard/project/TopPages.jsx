// const topPages = [
//     {
//         path: "/",
//         visits: 1240,
//     },
//     {
//         path: "/pricing",
//         visits: 860,
//     },
//     {
//         path: "/blog/how-react",
//         visits: 542,
//     },
//     {
//         path: "/contact",
//         visits: 210,
//     },
//     {
//         path: "/docs",
//         visits: 120,
//     },
// ];

export default function TopPages({ data }) {
    console.log(data);
    
    return (
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-white">
                    Top Pages
                </h2>

                <p className="text-sm text-zinc-400">
                    Most visited pages
                </p>
            </div>
            <div className="space-y-1">
                {(data ?? []).map((page) => (
                    <div key={page.path}>
                        <div className="flex items-center justify-between rounded-lg px-2 py-3 transition-colors hover:bg-zinc-800/50">
                            <p className="font-medium text-white">
                                {page.path}
                            </p>
                            <p className="text-sm text-zinc-400">
                                {page.views.toLocaleString()} views
                            </p>
                        </div>
                        <div className="h-px bg-zinc-800" />
                    </div>
                ))}
            </div>
        </section>
    );
}