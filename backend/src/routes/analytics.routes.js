import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js"
import { getAnalyticsOverview } from "../controllers/analytics.controller.js"

const router = express.Router();
router.get('/overview/:projectId', authMiddleware, getAnalyticsOverview);

export default router;