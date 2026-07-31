"use client";

import useProjects from "@/hooks/useProjects";
import SettingsCard from "./SettingsCard";

export default function ProjectSettingsList() {
    const { projects, loading } = useProjects();

    if (loading) {
        return (
            <p className="text-zinc-400">
                Loading projects...
            </p>
        );
    }

    if (projects.length === 0) {
        return (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center">
                <h2 className="text-xl font-semibold text-white">
                    No Projects
                </h2>

                <p className="mt-2 text-zinc-400">
                    Create your first project to manage settings.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4 py-4">
            {projects.map(project => (
                <SettingsCard
                    key={project.id}
                    project={project}
                />
            ))}
        </div>
    );
}