import express from "express";
import authRouter from "./routes/auth.routes.js";
import projectRouter from './routes/project.routes.js'
import trackRouter from './routes/track.routes.js'
import analyticsRouter from "./routes/analytics.routes.js"
import cookieParser from "cookie-parser"
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()); // kyuki data json ke form me ayega to express use read kare sake. kyuki express can't parse json
app.use(cookieParser())

// CORS for dashboard APIs
const dashboardCors = cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
});

// Public tracker endpoint
const trackerCors = cors({
    origin: true,
});

app.use("/api/auth", dashboardCors, authRouter);
app.use("/api/projects", dashboardCors, projectRouter);
app.use("/api/analytics", dashboardCors, analyticsRouter);

app.use("/api/track", trackerCors, trackRouter);

app.use("/tracker", express.static(path.join(__dirname, "../../tracker")));


export default app;