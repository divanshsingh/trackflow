import api from "@/lib/api";

export const signup = async (userData) => {
    const response = await api.post("/api/auth/signup", userData);
    return response.data;
}

export const login = async (userData) => {
    const response = await api.post("/api/auth/login", userData);
    return response.data;
}

export const logout = async () => {
    const response = await api.post("/api/auth/logout");
    return response.data;
}