"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cat } from "lucide-react";

export default function Hero() {
    return(
        <section className="relative overflow-hidden bg-zinc-950">
            {/* {Glow Center} */}
            <div
                className="absolute pointer-events-none inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, white 1px, transparent 1px),
                        linear-gradient(to bottom, white 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />            
            
            {/* {Grid} */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
                <div className="absolute right-20 top-40 h-[250px] w-[250px] rounded-full bg-violet-600/10 blur-[120px]" />
            </div>            
            <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-52 text-center">
                {/* <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" /> */}
                
                {/* Badge */}
                <div className="mb-6 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
                    ✨ Privacy-first • Open Source • Real-time
                </div>                
                
                {/* Heading */}
                <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight text-white md:text-7xl">
                    Website analytics
                    <br />
                    <span className="text-zinc-400">
                        without the <span className="text-blue-500"> complexity. </span>
                    </span>
                </h1>   

                {/* Description */}
                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                    Track visitors, sessions, page views, browsers,
                    operating systems and traffic sources with a
                    beautiful dashboard designed for developers.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <Link href="/signup">
                        <Button className="h-12 rounded-xl bg-blue-600 px-6 font-medium hover:bg-blue-500">
                            Start Tracking Free
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="https://github.com/divanshsingh/trackflow">
                        <Button
                            variant="outline"
                            className=" h-12 rounded-xl border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white">
                            <Cat className="mr-2 h-4 w-4" />
                            GitHub
                        </Button>
                    </Link>
                </div>                                             
            </div>            
        </section>        
    )
}