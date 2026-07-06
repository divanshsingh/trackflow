import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {
    try {
    const token = req.cookies.accessToken;
    if(!token){
            return res.status(401).json({
                success: false,
                message: "Unauthorized. Please login first.",

            });        
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // iske andar se hume id mil rhi h, req.user.id
    
    next()            
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",        
    })
}
}