import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Navbar from "@/components/landing/Navbar";

export default function DashboardLayout({children}){
    return(
    <div className="flex h-screen bg-zinc-950">
        <div className="flex flex-1 flex-col">
            <div className="px-6">
            <DashboardHeader />
            </div>
            <main className="flex-1 overflow-y-auto">
                    {children}
            </main>         
        </div>
    </div>
    )
}