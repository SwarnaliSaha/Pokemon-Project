import { Route,Routes } from "./route.type";
import AuthRouter from "../auth/auth.router";

export const routes : Routes = [
    new Route('/auth',AuthRouter)
]