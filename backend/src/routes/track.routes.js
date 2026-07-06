import { Router } from "express"
import { trackVisitor } from "../controllers/track.controller.js";

const router = Router();

router.post("/", trackVisitor);

export default router;