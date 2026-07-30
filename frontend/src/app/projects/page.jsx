"use client";

import ProjectCard from "@/components/dashboard/ProjectCard";
import ProjectsSection from "@/components/dashboard/ProjectsSection";
import { Button } from "@/components/ui/button";
import usePaginatedProjects from "@/hooks/usePaginatedProjects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function ProjectsPage() {
    const [page, setPage] = useState(1);

    const {
        projects,
        pagination,
        loading,
    } = usePaginatedProjects(page);

    if (loading) {
        return <p>Loading...</p>;
    }
console.log(projects);
    return (
        <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">

            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-white">
                        Projects
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        Manage, monitor and organize all your projects.
                    </p>
                </div>
                <Link href="/dashboard">
                        <Button className="h-12 rounded-xl bg-blue-600 px-6 font-medium hover:bg-blue-500">
                            Go To Dashboard
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                </Link>
            </div>

            {/* Projects Card */}
            {projects.length === 0 ? (
            <div className="flex h-64 items-center justify-center rounded-xl border border-zinc-800">
                <p className="text-zinc-400">
                    No projects found.
                </p>

            </div>

        ) : (

            <div className="space-y-6">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        )}

            {/* Footer */}
            <div className="flex items-center justify-between text-white">
                <Button
                    variant="outline"
                    className="border-zinc-700 bg-zinc-90 text-white"
                    onClick={() => setPage(page - 1)}
                    disabled={!pagination?.hasPrevious}
                >
                    Previous
                </Button>
                <span>
                    Page {pagination?.page} of {pagination?.totalPages}
                </span>
                <Button
                    variant="outline"
                    className="border-zinc-700 bg-zinc-90 text-white"
                    onClick={() => setPage(page + 1)}
                    disabled={!pagination?.hasNext}
                >
                    Next
                </Button>

            </div>

        </div>
    );
}