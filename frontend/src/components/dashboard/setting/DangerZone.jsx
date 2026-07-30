"use client";

import { Button } from "@/components/ui/button";
import { deleteProject } from "@/services/project.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { AlertDialog } from "@base-ui/react/alert-dialog";
import { toast } from "sonner";


export default function DangerZone({ project }) {
    const router = useRouter();
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
    mutationFn: () => deleteProject(project.id),
    onSuccess: () => {
        toast.success("Project deleted successfully");
        queryClient.invalidateQueries({
        queryKey: ["projects"],
        });
        router.push("/dashboard");
    },
    onError: (error) => {
        toast.error(
        error.response?.data?.message || "Failed to delete project"
        );
    }
    })
    return (
        <section className="rounded-2xl border border-red-900 bg-red-950/20 p-6">

            <h2 className="text-xl font-semibold text-red-400">
                Danger Zone
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
                Permanently delete this project and all associated analytics.
                This action cannot be undone.
            </p>
            <AlertDialog.Root>

    <AlertDialog.Trigger render={<Button variant="destructive" />}>
        Delete Project
    </AlertDialog.Trigger>

    <AlertDialog.Portal>

        <AlertDialog.Backdrop className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

        <AlertDialog.Popup className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">

            <AlertDialog.Title className="text-xl font-semibold text-white">
                Delete Project
            </AlertDialog.Title>

            <AlertDialog.Description className="mt-3 text-sm text-zinc-400">
                This will permanently delete{" "}
                <span className="font-semibold text-white">
                    {project.name}
                </span>
                , including all analytics, visitors and sessions.
                This action cannot be undone.
            </AlertDialog.Description>

            <div className="mt-8 flex justify-end gap-3">

                <AlertDialog.Close
                    render={
                        <Button
                            variant="outline"
                            className="border-zinc-700"
                        />
                    }
                >
                    Cancel
                </AlertDialog.Close>

                <Button
                    variant="destructive"
                    disabled={deleteMutation.isPending}
                    onClick={() => deleteMutation.mutate()}
                >
                    {deleteMutation.isPending
                        ? "Deleting..."
                        : "Delete Project"}
                </Button>

            </div>

        </AlertDialog.Popup>

    </AlertDialog.Portal>

</AlertDialog.Root>                  

        </section>
    );
}