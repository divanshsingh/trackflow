import { trackVisitorService } from "../services/track.service.js"

export const trackVisitor = async (req, res) => {
    try {
        const result = await trackVisitorService({
            apiKey: req.body.apiKey,
            path: req.body.path,
            title: req.body.title,
            referrer: req.body.referrer,
            visitorId: req.cookies.visitorId,
        });
        // New visitor
        if(result.newVisitorId){
            res.cookie("visitorId", result.newVisitorId, {
                httpOnly: true,
                sameSite: "lax",
                secure: false,
                maxAge: 365 * 24 * 60 * 60 * 1000,
            });            
        }
        return res.status(200).json({
            success: true,
            message: "Tracking request received",
            data: result,            
        });        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });        
    }
}