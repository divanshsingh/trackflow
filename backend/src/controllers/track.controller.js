import { trackService } from "../services/track.service.js"
import {UAParser} from "ua-parser-js";

export const trackVisitor = async (req, res) => {
    
    const parser = new UAParser(req.headers["user-agent"]);

    const browser = parser.getBrowser().name || "Unknown";
    const os = parser.getOS().name || "Unknown";
    const device = parser.getDevice().type || "Desktop";
    try {
        const result = await trackService({
            apiKey: req.body.apiKey,
            path: req.body.path,
            title: req.body.title,
            referrer: req.body.referrer,
            visitorId: req.body.visitorId,
            sessionId: req.body.sessionId, 
            browser,
            os,
            device,
        });      
        return res.status(200).json({
            success: true,
            message: "Tracking request received",
            data: {
                visitorId: result.visitor.visitorId,
                sessionId: result.session.sessionId,
            },           
        });        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });        
    }
}