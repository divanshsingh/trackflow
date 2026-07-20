"use client";

import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/services/project.service";

export default function useProjects() {
    const query = useQuery({
            queryKey: ["projects"],
            queryFn: getProjects,
        });
        return {
            projects: query.data?.data || [],
            loading: query.isLoading,
            error: query.error,
        };
}