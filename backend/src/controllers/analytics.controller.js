import { 
    getAnalyticsOverviewService,
    getTopPagesService,
    getVisitorTrendService } from "../services/analytics.service.js"

export const getAnalyticsOverview = async (req, res) => {
    try{
    const result = await getAnalyticsOverviewService(req.params.projectId, req.user.id);
    return res.status(200).json({
        success: true,
        data: result
    })
}
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const getTopPages = async (req, res) => {
    try {
         const result = await getTopPagesService(req.params.projectId, req.user.id);
        return res.status(200).json({
        success: true,
        data: result
        })   
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });        
    }    

}

export const getVisitorTrend = async (req, res) => {
    try {
        const result = await getVisitorTrendService(req.params.projectId, req.user.id);
        return res.status(200).json({
            success: true,
            data: result,
        
        });        
    } catch (error) {
            return res.status(400).json({
            success: false,
            message: error.message,
            });        
    }
}