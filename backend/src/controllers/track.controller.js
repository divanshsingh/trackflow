import { trackService } from "../services/track.service.js"

export const trackVisitor = async (req, res) => {
    console.log(req.cookies);
    try {
        const result = await trackService({
            apiKey: req.body.apiKey,
            path: req.body.path,
            title: req.body.title,
            referrer: req.body.referrer,
            visitorId: req.cookies.visitorId,
            sessionId: req.cookies.sessionId, 
        });
        // New visitor
        if(result.isNewVisitor){
            res.cookie("visitorId", result.visitor.visitorId, {
                httpOnly: true,
                sameSite: "lax",
                secure: false,
                maxAge: 365 * 24 * 60 * 60 * 1000,
            });            
        }
        if (result.isNewSession) {
            res.cookie("sessionId", result.session.sessionId, {
                httpOnly: true,
            sameSite: "lax",
            secure: false,
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