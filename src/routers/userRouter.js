import express from "express"
import { user } from "../schemi/users.js";

const userRouter = express.Router()

// visualizzo nella get tutti gli utenti 
userRouter.get("/author", async (req, res) => {
    // qui restituiamo gli utenti
    const author = await user.find({})
    res.json(author)
}).get("/author/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const authorbyId = await user.findById(id);
        res.json(authorbyId)
    } catch (error) {
        next()
    }
}).post("/author", async (req, res, next) => {
    try {
        const newAuthor = new user(req.body);
        await newAuthor.save();
        res.status(201).send(newAuthor);
    } catch (error) {
        next()
    }
}).delete("/author/:id", async (req, res) => {
    const authorDelete = await user.findByIdAndDelete(req.params.id);
    if (!authorDelete) {
        // Questa risorsa non è esistente e quindi non si può cancellare
        res.status(404).send();
      } else {
        res.status(204).send();
      }
}).put("/author/:id", async (req,res, next)=>{
    const authorUpdate = await user.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if(!authorUpdate){
        res.json(authorUpdate)
    }else{
        // res.status(404).send();
        next()
    }
})

export default userRouter

