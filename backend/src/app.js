import express from "express";
import authRouter from "./routes/auth.routes.js";
import projectRouter from './routes/project.routes.js'
import trackRouter from './routes/track.routes.js'
import cookieParser from "cookie-parser"

const app = express();

app.use(express.json()); // kyuki data json ke form me ayega to express use read kare sake. kyuki express can't parse json
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/projects", projectRouter)
app.use("/api/track", trackRouter)


export default app;