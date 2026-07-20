"use client";

import DeviceBreakdown from "@/components/dashboard/project/DeviceBreakdown";
import OverviewCards from "@/components/dashboard/project/OverviewCards";
import ProjectHeader from "@/components/dashboard/project/ProjectHeader";
import TopPages from "@/components/dashboard/project/TopPages";
import TrafficSources from "@/components/dashboard/project/TrafficSources";
import VisitorsChart from "@/components/dashboard/project/VisitorsChart";
import useProject from "@/hooks/useProject";
import useAnalytics from "@/hooks/useAnalytics";
import { use, useEffect } from "react";

export default function ProjectDetailsPage({ params }) {
        const { id } = use(params);        
        const {
            overview,
            visitorTrend,
            topPages,
            deviceStats,
            trafficSource,
            loading: analyticsLoading,
            error: analyticsError,
         } = useAnalytics(id);

        useEffect(() => {
            console.log(overview);
            console.log(visitorTrend);
        }, [overview]);

        const {
        project,
        loading,
        error,
        } = useProject(id);
        if (loading) {
        return (
            <p className="text-white">
                Loading...
            </p>
            );
        }
        if (error) {
        return (
            <p className="text-red-500">
                Something went wrong.
            </p>
            );
        }
    return (
        <div className="space-y-8">
        <ProjectHeader project={project} />
        <OverviewCards overview={overview}/>
        <VisitorsChart data={visitorTrend}/>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <TopPages data={topPages}/>
            <TrafficSources trafficSources={trafficSource}/>
            <DeviceBreakdown data={ deviceStats }/>
        </div>
    </div>
    );
}