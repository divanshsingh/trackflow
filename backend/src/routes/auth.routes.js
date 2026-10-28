import express from "express";
import { 
    signup,
    login,
    logout,
    getMe,
    verifyOtp,
    googleLogin,
    deleteUser} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", authMiddleware, getMe);
router.post("/signup", signup);
router.post("/verify-otp", verifyOtp);
router.post("/google", googleLogin);
router.post("/login", login);
router.post("/logout", logout);
router.delete("/delete-account", authMiddleware, deleteUser)

export default router;