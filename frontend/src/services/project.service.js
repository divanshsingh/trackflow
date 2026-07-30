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

export const getPaginatedProjects = async(page, limit = 10) => {
    const res = await api.get(`/api/projects?page=${page}&limit=${limit}`);
    return res.data;
}

export const updateProject = async (projectId, data) => {
    const response = await api.patch(`/api/projects/${projectId}`, data);
    return response.data.data;
}

export const deleteProject = async(projectId) => {
    const {data} = api.delete(`/api/projects/${projectId}`);
    return data;
}