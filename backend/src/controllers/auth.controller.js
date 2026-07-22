import { signupService, loginService, getMeService} from "../services/auth.service.js";

export const signup = async (req, res) => {
    try {
        const user = await signupService(req.body);
        return res.status(201).json({
            success: true, 
            message: "User created successfully",
            data: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });        
    } catch (error) {
        return res.status(409).json({
            success: false,
            message: error.message,
        })
    }
}

export const login = async (req, res) => {
    try {
        const result = await loginService(req.body);

        res.cookie("accessToken", result.token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
       
        return res.status(200).json({
            success: true,
            message: "Logged in successfully",
            data: {
                id: result.user.id,
                name: result.user.name,
                email: result.user.email,                
            },
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

