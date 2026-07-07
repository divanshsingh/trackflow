import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js"
import { 
    getAnalyticsOverview, 
    getTopPages,
    getVisitorTrend,
    getReferrers } from "../controllers/analytics.controller.js"

const router = express.Router();
router.get("/overview/:projectId", authMiddleware, getAnalyticsOverview);
router.get( "/top-pages/:projectId", authMiddleware, getTopPages);
router.get( "/visitor-trend/:projectId", authMiddleware, getVisitorTrend);
router.get( "/referrers/:projectId", authMiddleware, getReferrers);

export default router;