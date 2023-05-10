import express from "express";
import { registerRoutes } from "./routes/routes";

export const startServer = ()=>{
    const app = express();

    registerRoutes(app);

    const {PORT} = process.env

    app.listen(PORT||3000,()=>console.log(`listening at port ${PORT||3000}`))
}