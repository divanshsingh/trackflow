import express from "express";
import {authMiddleware} from "../middleware/auth.middleware.js"
import { createProject, getProject, getProjectById , updateProject, deleteProject} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/", authMiddleware, createProject);
router.get("/", authMiddleware, getProject);
router.get("/:id", authMiddleware, getProjectById);
router.patch("/:id", authMiddleware, updateProject);
router.delete("/:id", authMiddleware, deleteProject);

export default router;