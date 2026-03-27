import dotenv from "dotenv";
dotenv.config();

import app from "./app";

import prisma from "./lib/prisma";

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});

process.on("SIGINT", async ()=>{
    await prisma.$disconnect();
    process.exit(0);
});