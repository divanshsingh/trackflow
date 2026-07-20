"use client";

import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "@/services/project.service";

export default function useProject(id) {

    const query = useQuery({
        queryKey: ["project", id],
        queryFn: () => getProjectById(id),
        enabled: !!id,
    });
        return {
        project: query.data?.data,
        loading: query.isLoading,
        error: query.error,
    };
}