import { 
    signupService, 
    loginService, 
    getMeService, 
    verifyOtpService, 
    googleAuthService,
    deleteUserService,} from "../services/auth.service.js";

export const signup = async (req, res) => {
    try {
        const user = await signupService(req.body);
        return res.status(201).json({
            success: true, 
            message: "OTP sent to your email. Please verify to continue.",
            data: user,
        });        
    } catch (error) {
        return res.status(409).json({
            success: false,
            message: error.message,
        })
    }
}

export const verifyOtp = async (req, res) => {
    try{
        const result = await verifyOtpService(req.body);
        
        // Verification successful hone par cookie set kar dein
        res.cookie("accessToken", result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        return res.status(200).json({
            success: true,
            message: "Email verified successfully!",
            data: result.user,
        })
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

export const googleLogin = async (req, res) => {
    try{
        const { idToken } = req.body;
        const result = await googleAuthService(idToken);

        res.cookie("accessToken", result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
            return res.status(200).json({
            success: true,
            message: "Logged in with Google successfully",
            data: result.user,
        });        
    }catch(error){
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const login = async (req, res) => {
    try {
        const result = await loginService(req.body);

        res.cookie("accessToken", result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
       
        return res.status(200).json({
            success: true,
            message: "Logged in successfully",
            data: result.user,
        })        
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message,
        })
    }
}

export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    })

    return res.status(200).json({
        success: true,
        message: "Logged out successfully"
    })
}

export const deleteUser = async (req, res) => {
    try {
        // Middleware se logged-in user ki id milegi (req.user.id)
        const userId = req.user.id;
        await deleteUserService(userId);
        res.clearCookie("token");

        return res.status(200).json({message: "Account deleted successfully"});        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await getMeService(req.user.id);
        return res.status(200).json({
            success: true,
            data: user,
        });         
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }   
}

