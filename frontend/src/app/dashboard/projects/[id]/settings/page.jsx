"use client";

import { use } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";


import GeneralSettings from "@/components/dashboard/setting/GeneralSettings";
import ApiKeySettings from "@/components/dashboard/setting/ApiKeySettings";
import InstallationSettings from "@/components/dashboard/setting/InstallationSettings";
import RegenerateApiKey from "@/components/dashboard/setting/RegenerateApiKey";
import DangerZone from "@/components/dashboard/setting/DangerZone";

import useProject from "@/hooks/useProject";

export default function ProjectSettingsPage({ params }) {
    const { id } = use(params);

    const { project, isLoading, error } = useProject(id);

    if (isLoading) {
        return(
          <div className="flex h-[60vh] items-center justify-center">
              <p className="text-zinc-400">Loading project...</p>
          </div>
        )
    }

    if (error) {
        return (
            <div className="flex h-[60vh] items-center justify-center text-red-500">
                Failed to load project.
            </div>
        );
    }

    if (!project) {
        return (
            <div className="flex h-[60vh] items-center justify-center text-zinc-400">
                Project not found.
            </div>
        );
    }

    return (
        <>
            <div className="mx-auto max-w-5xl space-y-8 px-6 py-8">

                <GeneralSettings project={project} />

                <ApiKeySettings project={project} />

                {!project.trackingStatus && (
                    <InstallationSettings project={project} />
                )}

                <RegenerateApiKey project={project} />

                <DangerZone project={project} />

            </div>
        </>
    );
}