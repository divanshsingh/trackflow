import {
    Rocket,
    FolderPlus,
    Code2,
    BarChart3,
    Globe,
    CheckCircle,
} from "lucide-react";

const steps = [
    {
        icon: FolderPlus,
        title: "1. Create a Project",
        description:
            "Create your first project from the dashboard. TrackFlow will generate a unique API key for your website.",
    },
    {
        icon: Code2,
        title: "2. Install the Tracker",
        description:
            "Copy the tracking script and paste it before the closing </body> tag of your website.",
    },
    {
        icon: Globe,
        title: "3. Visit Your Website",
        description:
            "Open your website in a browser. TrackFlow will automatically start collecting analytics.",
    },
    {
        icon: BarChart3,
        title: "4. View Analytics",
        description:
            "Return to your dashboard to monitor visitors, sessions, devices, browsers, operating systems, traffic sources and top pages.",
    },
];

const features = [
    "Visitors",
    "Sessions",
    "Page Views",
    "Top Pages",
    "Devices",
    "Browsers",
    "Operating Systems",
    "Traffic Sources",
];

export default function DocsPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
                        <Rocket className="h-8 w-8" />
                    </div>

                    <h1 className="mt-6 text-5xl font-bold">
                        TrackFlow Documentation
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                        Get started with TrackFlow in less than 2 minutes.
                        Install the tracker, create your first project and
                        start monitoring your website analytics.
                    </p>
                </div>

                <section className="mt-20 grid gap-6 md:grid-cols-2">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.title}
                                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                                    <Icon className="h-6 w-6" />
                                </div>

                                <h2 className="mt-5 text-xl font-semibold">
                                    {step.title}
                                </h2>

                                <p className="mt-3 text-zinc-400">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </section>

                <section className="mt-20">
                    <h2 className="text-3xl font-bold">
                        Installation
                    </h2>

                    <p className="mt-3 text-zinc-400">
                        Add the following script before the closing
                        {" "}
                        {"</body>"}
                        {" "}
                        tag.
                    </p>

                    <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                        <pre className="text-sm text-green-400">
{`<script
    src="https://your-domain.com/tracker.js"
    data-api-key="YOUR_API_KEY">
</script>`}
                        </pre>
                    </div>
                </section>

                <section className="mt-20">
                    <h2 className="text-3xl font-bold">
                        Analytics Included
                    </h2>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <div
                                key={feature}
                                className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4"
                            >
                                <CheckCircle className="h-5 w-5 text-green-500" />

                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-20">
                    <h2 className="text-3xl font-bold">
                        Frequently Asked Questions
                    </h2>

                    <div className="mt-8 space-y-6">
                        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                            <h3 className="font-semibold">
                                Does TrackFlow work with React and Next.js?
                            </h3>

                            <p className="mt-2 text-zinc-400">
                                Yes. Just include the tracking script in your
                                application and TrackFlow will start collecting
                                analytics.
                            </p>
                        </div>

                        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                            <h3 className="font-semibold">
                                Do I need to install any npm package?
                            </h3>

                            <p className="mt-2 text-zinc-400">
                                No. Simply add the tracking script to your
                                website.
                            </p>
                        </div>

                        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                            <h3 className="font-semibold">
                                How quickly will analytics appear?
                            </h3>

                            <p className="mt-2 text-zinc-400">
                                Usually within a few seconds after your first
                                page visit.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}