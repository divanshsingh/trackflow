import express from "express";
import { signup, login, logout, getMe} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", authMiddleware, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;