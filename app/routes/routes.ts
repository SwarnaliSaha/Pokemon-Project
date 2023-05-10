import { Application, json } from "express";
import { routes } from "./route.data";

export const registerRoutes = (app:Application)=>{
    app.use(json())

    for(let route of routes)
        app.use(route.path,route.router);
}