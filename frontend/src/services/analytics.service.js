import api from "@/lib/api";

export const getOverview = async(projectId) => {
    const response = await api.get(`api/analytics/overview/${projectId}`);
    return response.data;
}


export const getVisitorTrend = async(projectId) => {
    const response = await api.get(`api/analytics/visitor-trend/${projectId}`);
    return response.data;
}


export const getTopPages = async(projectId) => {
    const response = await api.get(`api/analytics/top-pages/${projectId}`);
    return response.data;
}

export const getReferrers = async(projectId) => {
    const response = await api.get(`api/analytics/referrers/${projectId}`);
    return response.data;
}


export const getDeviceStats = async(projectId) => {
    const response = await api.get(`api/analytics/device-stats/${projectId}`);
    return response.data;
}
