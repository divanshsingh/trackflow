"use client"

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DashboardPreview from "@/components/landing/DashboardPreview";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Features from "@/components/landing/Features";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/services/auth.service";
import LoggedInCTA from "@/components/landing/LoggedInCTA";

export default function Home() {
    const {data: user} = useQuery({
        queryKey: ["me"],
        queryFn: getMe
    })
    return (
        <>
            <Navbar user={user}/>
            <Hero />
            <DashboardPreview />
            <Features />
            {!user ? <CTA /> : <LoggedInCTA />}
            <Footer />
        </>
    );
}