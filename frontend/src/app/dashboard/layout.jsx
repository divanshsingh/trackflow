import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({children}){
    return(
    <div className="flex min-h-screen bg-zinc-950">
        <DashboardSidebar />

        <div className="flex flex-1 flex-col">
            <DashboardHeader />
            <main className="flex-1 overflow-y-auto">
                    {children}
            </main>            
        </div>
    </div>
    )
}