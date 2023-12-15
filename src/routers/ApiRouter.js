import express from "express";
import userRouter from "./userRouter.js";
import userDbRouter from "./userDbRouter.js";
import blogRouter from "./blogRouter.js";
import path from "path"
import multer from "multer";


const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, cb) {
        cb(null, 
            `${Date.now()}_${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage})


const Apirouter = express.Router();
Apirouter.use(express.json());

Apirouter.use("/users", userRouter)
Apirouter.use("/m6d3", userDbRouter)
Apirouter.use("/blogpost", blogRouter)

Apirouter.patch("/users/:id", upload.single("avatar"), (req, res) => {
    //qui dobbiamo caricare il file del tale id sul proprio user
    
    res.send()
})

export default Apirouter;