import { useEffect, useState } from "react";
import { getOverview, getVisitorTrend, getTopPages, getDeviceStats, getReferrers} from "@/services/analytics.service";

export default function useAnalytics(projectId){
    const [overview, setOverview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [visitorTrend, setVisitorTrend] = useState([]);
    const [topPages, setTopPages] = useState([]);
    const [deviceStats, setDeviceStats] = useState([]);
    const [trafficSource, setTrafficSource] = useState([]);


    useEffect(() => {
        if (!projectId) return;
        const fetchOverview = async ()=>{
            try {
                const response = await getOverview(projectId);
                setOverview(response.data);   
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        const fetchVisitorTrend = async ()=>{
        try {
            const response = await getVisitorTrend(projectId);
            setVisitorTrend(response.data);
        } catch (err) {
            setError(err.message);
        }
        }
        const fetchTopPages = async () => {
            try {
                const response = await getTopPages(projectId);
                setTopPages(response.data);   
            } catch (err) {
                setError(err.message);
            }
        }
        const fetchDeviceStats = async () => {
            try {
                const response = await getDeviceStats(projectId);
                setDeviceStats(response.data);   
            } catch (error) {
                setError(error.message);
            }

        }
        const fetchTrafficSource = async () => {
            try {
                const response = await getReferrers(projectId);
                setTrafficSource(response.data);                
            } catch (error) {
                setError(error.message);
            }

        }
        fetchOverview();
        fetchVisitorTrend();
        fetchTopPages();
        fetchDeviceStats();
        fetchTrafficSource();
    }, [projectId]);
    return {
        overview,
        visitorTrend,
        topPages,
        deviceStats,
        trafficSource,
        loading,
        error,
    };
}
