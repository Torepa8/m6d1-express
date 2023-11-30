import express from "express";
import userRouter from "./userRouter.js";
import userDbRouter from "./userDbRouter.js";

const Apirouter=express.Router();
Apirouter.use(express.json());

Apirouter.use("/users", userRouter)
Apirouter.use("/m6d3", userDbRouter)

export default Apirouter;