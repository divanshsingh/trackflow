import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Navbar from "@/components/landing/Navbar";

export default function DashboardLayout({children}){
    return(
    <div className="flex h-screen bg-zinc-950">
            <main className="flex-1">
                    {children}
            </main>         
    </div>
    )
}