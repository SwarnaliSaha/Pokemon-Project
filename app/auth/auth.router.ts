import { Router } from "express";
import { RESPONSE_HANDLER } from "../utility/response-handler";
import authService from "./auth.service";

const router = Router();

router.post('/Register',async (req,res,next)=>{
    try{
        const user = req.body;
        const result = await authService.register(user);
        res.send(new RESPONSE_HANDLER(result));
    }
    catch(e){
        next(e);
    }
})

router.post('/Login',async (req,res,next)=>{
    try{
        const credentials = req.body;
        console.log(credentials);
        const result = await authService.login(credentials);
        res.send(new RESPONSE_HANDLER(result))
    }
    catch(e){
        next(e);
    }
})

router.post('/AssignTrainer',(req,res,next)=>{
    try{
        const user = req.body;
        const result = authService.assignTrainer(user);
        res.send(new RESPONSE_HANDLER(result));
    }
    catch(e){
        next(e);
    }
})

export default router;