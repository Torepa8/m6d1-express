import express from "express";
import userRouter from "./userRouter.js";

const Apirouter=express.Router();
Apirouter.use(express.json());

// const url="mongodb+srv://salvatorepau91:rSotH7nz6hTkPjnG@m6d1.iebzrkd.mongodb.net/epicodeblog"

Apirouter.get("/test", async (req, res) => {  //restituire json
    // res.json({ message: "Hello World" });
    const user = await user.find({})
    res.json(user)
})

Apirouter.post("/body", (req, res) => {
    console.log(req.body);
})

Apirouter.use("/users", userRouter)

export default Apirouter;