import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DashboardPreview from "@/components/landing/DashboardPreview";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Features from "@/components/landing/Features";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <DashboardPreview />
            <Features />
            <CTA />
            <Footer />
        </>
    );
}