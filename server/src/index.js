import dotenv from "dotenv";
dotenv.config();

import app from "./app";

import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});

process.on("SIGINT", async ()=>{
    await prisma.$disconnect();
    process.exit(0);
});