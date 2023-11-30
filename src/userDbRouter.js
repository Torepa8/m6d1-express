import express from "express";
import { userDB } from "./schemi/userBydbprova.js"

const userDbRouter = express.Router();

//user attivi
userDbRouter.get("/all/active", async (req, res,next) => {
    try {
        const useractive = await userDB.find({ isActive: true })
        res.json(useractive)    
    } catch (error) {
        next(error)    
    }
}).get("/all/", async (req,res)=> {
    const { q,limit } = req.query;
    const over_q = await userDB.find({age: { $gte: q }})
    .limit(limit)
    res.json(over_q)
})


export default userDbRouter;