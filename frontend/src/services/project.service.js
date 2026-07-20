import api from "@/lib/api";

export const createProject = async (projectData) => {
    const response = await api.post("/api/projects", projectData);
    return response.data;
}

export const getProjects = async () => {
    const response = await api.get("/api/projects");
    return response.data;
};

export const getProjectById = async (id) => {
    const response = await api.get(`/api/projects/${id}`);
    return response.data;
}