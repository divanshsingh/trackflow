import { useEffect, useState } from "react";
import { getOverview } from "@/services/analytics.service";

export default function useAnalytics(projectId){
    const [overview, setOverview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [visitorTrend, setVisitorTrend] = useState([]);

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
        fetchOverview();
        fetchVisitorTrend();
    }, [projectId]);
    return {
        overview,
        visitorTrend,
        loading,
        error,
    };
}
