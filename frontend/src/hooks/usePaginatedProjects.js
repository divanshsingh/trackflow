"use client";

import { getPaginatedProjects } from "@/services/project.service";
import { useQuery } from "@tanstack/react-query";


export default function usePaginatedProjects(page, limit = 5) {
    const query = useQuery({
        queryKey: ["projects", page, limit],
        queryFn: () => getPaginatedProjects(page, limit),
        placeholderData: (previousData) => previousData,
    });

    return {
        projects: query.data?.data?.projects || [],
        pagination: query.data?.data?.pagination,
        loading: query.isLoading,
        error: query.error,
    };
}