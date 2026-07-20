"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProject } from "@/services/project.service";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const projectSchema = z.object({
    name: z
        .string()
        .min(2, "Project name must be at least 2 characters"),
    domain: z
        .string()
        .min(3, "Please enter a valid domain"),
})

export default function CreateProjectDialog() {
    const queryClient = useQueryClient();
    const createProjectMutation = useMutation({
    mutationFn: createProject,
    onSuccess: (response) => {
        queryClient.invalidateQueries({
        queryKey: ["projects"],
        });
        toast.success(response.message);
        reset();
        setOpen(false);
    },

    onError: (error) => {
        toast.error(
            error.response?.data?.message ||
            "Something went wrong."
        );
    },
});
    const [open, setOpen] = useState(false);
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
} = useForm({
    resolver: zodResolver(projectSchema)
})

const onSubmit = (data) => {
    createProjectMutation.mutate(data);
}
    return (
        <Dialog 
        open={open}
        onOpenChange={setOpen}>
            <DialogTrigger
                render={
                        <Button
                            disabled={createProjectMutation.isPending}
                            className="bg-blue-600 hover:bg-blue-500"
                        >
                            {createProjectMutation.isPending
                                ? "Creating..."
                                : "Create Project"}
                        </Button>
                }
            />
            <DialogContent className="border-zinc-800 bg-zinc-950 text-white">
                <DialogHeader>
                    <DialogTitle>
                        Create Project
                    </DialogTitle>
                    <DialogDescription>
                        Add your website to start tracking visitors.
                    </DialogDescription>
                </DialogHeader>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                    >
                    <div>
                        <label className="mb-2 block text-sm">
                            Project Name
                        </label>
                            <Input
                                placeholder="TrackFlow Website"
                                {...register("name")}
                            />
                            {errors.name && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.name.message}
                                </p>
                            )}
                    </div>
                    <div>
                        <label className="mb-2 block text-sm">
                            Domain
                        </label>
                            <Input
                                placeholder="trackflow.dev"
                                {...register("domain")}
                            />
                            {errors.domain && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.domain.message}
                                </p>
                            )}
                    </div>
                    <DialogFooter>
                        <Button
                            type="submit"
                            disabled={createProjectMutation.isPending}
                            className="w-full bg-blue-600 hover:bg-blue-500"
                        >
                            {createProjectMutation.isPending
                                ? "Creating..."
                                : "Create Project"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}