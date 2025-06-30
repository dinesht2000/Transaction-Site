import { Router } from "express";
import { UserSchema } from "../db";
const router=Router();




router.post("signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    

})