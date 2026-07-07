import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js"
import { getAnalyticsOverview, getTopPages } from "../controllers/analytics.controller.js"

const router = express.Router();
router.get("/overview/:projectId", authMiddleware, getAnalyticsOverview);
router.get( "/top-pages/:projectId", authMiddleware, getTopPages);

export default router;