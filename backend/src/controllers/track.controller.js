import { trackVisitorService } from "../services/track.service.js"

export const trackVisitor = async (req, res) => {
    try {
        const result = await trackVisitorService(req.body);
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