import {
    Activity,
    Globe,
    Monitor,
    Shield,
    MousePointerClick,
    BarChart3,
} from "lucide-react";



const features = [
    {
        icon: Activity,
        title: "Real-time Analytics",
        description:
            "Monitor visitors, sessions and page views as they happen.",
    },
    {
        icon: MousePointerClick,
        title: "SPA Tracking",
        description:
            "Automatically tracks navigation in React, Next.js and other SPA frameworks.",
    },
    {
        icon: Globe,
        title: "Traffic Sources",
        description:
            "See exactly where your visitors are coming from.",
    },
    {
        icon: Monitor,
        title: "Devices & Browsers",
        description:
            "Know which devices, browsers and operating systems your users prefer.",
    },
    {
        icon: BarChart3,
        title: "Beautiful Dashboard",
        description:
            "Clean visualizations designed for developers, not marketers.",
    },
    {
        icon: Shield,
        title: "Privacy First",
        description:
            "Simple analytics with minimal setup and no unnecessary complexity.",
    },
];

export default function Features() {
    return(
        <section
            id="features"
            className="bg-zinc-950 px-6 py-28"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <h2 className="text-4xl font-bold text-white">
                        Powerful analytics.
                        <br />
                        <span className="text-zinc-400">
                            Simple experience.
                        </span>
                    </h2>
                    <p className="mt-6 text-lg text-zinc-400">
                        Everything you need to understand your visitors
                        without the complexity of traditional analytics
                        platforms.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                                    <Icon className="h-6 w-6 text-blue-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    {feature.title}
                                </h3>
                                <p className="mt-4 leading-7 text-zinc-400">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div> 
            </div>               
        </section>        
    )
}