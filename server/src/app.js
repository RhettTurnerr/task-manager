import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();

app.use(helmet());

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
}));

app.use(express.json());
app.use(cookieParser());

app.get("/health", (req,res)=>{
    res.json({status: "ok"});
});

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({error: "Unexpected error"});
});

export default app;