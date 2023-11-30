import mongoose from "mongoose";
import Apirouter from "./ApiRouter.js";
import express from "express";

const server = express()

const port = 3008

server.use(express.json());

server.use("/api", Apirouter);

mongoose.connect("mongodb+srv://salvatorepau91:rSotH7nz6hTkPjnG@m6d1.iebzrkd.mongodb.net/epicodeblog")
    .then(() => {
        server.listen(port, () => {
            console.log("Server listning to " + port)
        });
    }).catch(() => {
        console.log("Errore connessione database")
    })
