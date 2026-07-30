"use client";

import ProjectSettingsList from "@/components/dashboard/setting/ProjectSettingsList";



export default function SettingsPage() {
    return (
        <div className="p-8">
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Settings
                </h1>

                <p className="mt-2 text-zinc-400">
                    Select a project to manage its settings.
                </p>
            </div>

            <ProjectSettingsList />
        </div>
    );
}