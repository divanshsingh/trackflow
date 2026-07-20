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

app.use(cors({
    origin: [
      "http://localhost:3000",
      "https://dh-virid.vercel.app",
    ],
    credentials: true,
}));

app.use("/tracker", express.static(path.join(__dirname, "../../tracker")));

app.use("/api/auth", authRouter)
app.use("/api/projects", projectRouter)
app.use("/api/track", trackRouter)
app.use("/api/analytics", analyticsRouter)


export default app;