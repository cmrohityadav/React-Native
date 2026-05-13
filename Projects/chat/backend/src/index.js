import express from "express"
import "dotenv/config"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
const app=express();

app.all('/api/auth/{*any}', toNodeHandler(auth));



app.get("/",(req,res)=>{
    res.send("Hello World from Backend!")
})

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000");
})