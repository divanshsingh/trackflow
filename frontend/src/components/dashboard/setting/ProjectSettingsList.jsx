"use client";

import { useState } from "react";
import useProjects from "@/hooks/useProjects";
import SettingsCard from "./SettingsCard";
import DeleteAccountButton from "../DeleteAccountButton";

export default function SettingsPage() {
    const { projects, loading } = useProjects();
    const [activeTab, setActiveTab] = useState("project"); // 'project' ya 'user'

    return (
        <div className="max-w-4xl mx-auto py-6 px-4 text-white">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>

            {/* Tabs Navigation */}
            <div className="flex border-b border-zinc-800 mb-6 space-x-6">
                <button
                    onClick={() => setActiveTab("project")}
                    className={`pb-3 font-medium transition-colors border-b-2 ${
                        activeTab === "project"
                            ? "border-blue-500 text-white"
                            : "border-transparent text-zinc-400 hover:text-zinc-200"
                    }`}
                >
                    Project Settings
                </button>
                <button
                    onClick={() => setActiveTab("user")}
                    className={`pb-3 font-medium transition-colors border-b-2 ${
                        activeTab === "user"
                            ? "border-blue-500 text-white"
                            : "border-transparent text-zinc-400 hover:text-zinc-200"
                    }`}
                >
                    User Settings
                </button>
            </div>

            {/* Section 1: Project Settings */}
            {activeTab === "project" && (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Your Projects</h2>
                    {loading ? (
                        <p className="text-zinc-400">Loading projects...</p>
                    ) : projects.length === 0 ? (
                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center">
                            <h3 className="text-xl font-semibold text-white">No Projects</h3>
                            <p className="mt-2 text-zinc-400">
                                Create your first project to manage settings.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4 py-4">
                            {projects.map((project) => (
                                <SettingsCard key={project.id} project={project} />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Section 2: User Settings */}
            {activeTab === "user" && (
                <div className="space-y-6">
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                        <h2 className="text-xl font-semibold text-white mb-2">Delete Account</h2>
                        <p className="text-zinc-400 text-sm mb-4">
                            Once you delete your account, there is no going back. Please be certain.
                        </p>
                        {/* Yahan apka DeleteAccountButton component aayega */}
                        <DeleteAccountButton />
                    </div>
                </div>
            )}
        </div>
    );
}