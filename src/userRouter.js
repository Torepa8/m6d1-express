import express from "express"
import { user } from "./schemi/users.js";

const userRouter = express.Router()

// visualizzo nella get tutti gli utenti 
userRouter.get("/author", async (req, res) => {    
    // qui restituiamo gli utenti
    const author = await user.find({})
    res.json(author)
});

userRouter.post("/author", async (req,res)=> {
    const newauthor={
        "nome":"nuovo",
        "cognome":"utente",
        "email":"new@mail.it",
        "data di nascita":"01/01/1991",
        "avatar":"img"
    }
    // res.json(newauthor)
});

export default userRouter

