"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateProject } from "@/services/project.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Globe, Folder } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function GeneralSettings({ project }) {
    const [name, setName] = useState(project.name);
    const [domain, setDomain] = useState(project.domain);
    const queryClient = useQueryClient();

    useEffect(() => {
        setName(project.name);
        setDomain(project.domain);
    }, [project])

    const hasChanges = name.trim() !== project.name || domain.trim() !== project.domain;

    const updateMutation = useMutation({
        mutationFn: () => updateProject(project.id, {name, domain}),
        onSuccess: () => {
            toast.success("Project updated successfully!");
            queryClient.invalidateQueries({
                queryKey: ["projects"],
            });
            queryClient.invalidateQueries({
                queryKey: ["project", project.id],
            });
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Update failed");
        },
    })
    console.log({

  name,

  projectName: project.name,

  domain,

  projectDomain: project.domain,

  hasChanges,

});
    return (
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <h2 className="text-xl font-semibold text-white">
                General
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
                Update your project details.
            </p>

            <div className="mt-6 space-y-5">

                <div>
                    <label className="mb-2 flex items-center gap-2 text-sm text-zinc-300">
                        <Folder className="h-4 w-4" />
                        Project Name
                    </label>

                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-zinc-700 bg-zinc-950 text-zinc-400"
                    />
                </div>

                <div>
                    <label className="mb-2 flex items-center gap-2 text-sm text-zinc-300">
                        <Globe className="h-4 w-4" />
                        Domain
                    </label>

                    <Input
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        className="border-zinc-700 bg-zinc-950 text-zinc-400"
                    />
                </div>

                <Button
                    className=" rounded-lg bg-blue-600 font-medium hover:bg-blue-500 text-white"
                    variant="outline"
                    onClick={() => {
                        updateMutation.mutate();
                    }}
                    disabled={!hasChanges || updateMutation.isPending}
                >
                    {updateMutation.isPending ? "Saving..." : "Save Changes"}
                </Button>
            </div>
        </section>
    );
}