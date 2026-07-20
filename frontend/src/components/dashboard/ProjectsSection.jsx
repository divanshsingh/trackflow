"use client";

import EmptyProjects from "./EmptyProjects";
import CreateProjectDialog from "./CreateProjectDialog";
import useProjects from "@/hooks/useProjects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
   const {projects, loading,} = useProjects();
   if (loading) {
    return (
        <section className="mt-10">
            <h2 className="text-2xl font-bold text-white">
                Projects
            </h2>
            <p className="mt-4 text-zinc-400">
                Loading projects...
            </p>
        </section>
    );
}
   return(
        <section className="mt-10">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Projects
                    </h2>
                    <p className="mt-1 text-zinc-400">
                        Manage and monitor all your websites.
                    </p>
                </div>
                    <CreateProjectDialog />
            </div>
            {projects.length === 0 ? (
                <EmptyProjects />
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
        </section>
   );
}