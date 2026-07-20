import Link from "next/link";
import { BarChart3, ShieldCheck, Activity } from "lucide-react";

export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">

            <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

                {/* LEFT */}

                <div className="flex items-center justify-center px-6 py-12">

                    <div className="w-full max-w-md">

                        {/* Logo */}

                        <Link
                            href="/"
                            className="mb-10 inline-flex items-center gap-3"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">

                                <BarChart3 className="h-6 w-6 text-white" />

                            </div>

                            <span className="text-2xl font-bold">
                                TrackFlow
                            </span>
                        </Link>

                        {children}

                    </div>

                </div>

                {/* RIGHT */}

                <div className="relative hidden overflow-hidden border-l border-white/10 lg:flex">

                    {/* Glow */}

                    <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

                    <div className="relative z-10 flex w-full flex-col justify-center px-14">

                        <span className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                            MODERN ANALYTICS
                        </span>

                        <h2 className="max-w-lg text-5xl font-bold leading-tight">
                            Understand your visitors.
                            <br />
                            Grow with confidence.
                        </h2>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
                            Track sessions, page views, devices,
                            browsers and traffic sources in a clean,
                            privacy-first dashboard.
                        </p>

                        {/* Preview Card */}

                        <div className="mt-12 rounded-3xl border border-white/10 bg-zinc-900/80 p-8 backdrop-blur">

                            <div className="mb-8 flex items-center justify-between">

                                <div>

                                    <p className="text-sm text-zinc-500">
                                        Visitors
                                    </p>

                                    <h3 className="mt-2 text-4xl font-bold">
                                        12.4K
                                    </h3>

                                </div>

                                <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
                                    ▲ 18%
                                </span>

                            </div>

                            <div className="space-y-4">

                                <div className="h-2 rounded-full bg-zinc-800">
                                    <div className="h-2 w-5/6 rounded-full bg-blue-500" />
                                </div>

                                <div className="h-2 rounded-full bg-zinc-800">
                                    <div className="h-2 w-2/3 rounded-full bg-cyan-400" />
                                </div>

                                <div className="h-2 rounded-full bg-zinc-800">
                                    <div className="h-2 w-4/5 rounded-full bg-blue-500" />
                                </div>

                                <div className="h-2 rounded-full bg-zinc-800">
                                    <div className="h-2 w-3/5 rounded-full bg-cyan-400" />
                                </div>

                            </div>

                        </div>

                        {/* Features */}

                        <div className="mt-10 grid grid-cols-2 gap-5">

                            <div className="flex items-center gap-3">

                                <ShieldCheck className="h-5 w-5 text-blue-500" />

                                <span className="text-zinc-300">
                                    Privacy First
                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <Activity className="h-5 w-5 text-blue-500" />

                                <span className="text-zinc-300">
                                    Real-time Insights
                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <ShieldCheck className="h-5 w-5 text-blue-500" />

                                <span className="text-zinc-300">
                                    SPA Tracking
                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <Activity className="h-5 w-5 text-blue-500" />

                                <span className="text-zinc-300">
                                    Fast SDK
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}