import express from "express"
import { blogPost } from "../schemi/blogPost.js"

const blogRouter=express.Router();

blogRouter.get("/", async (req,res) => {
    const blog=await blogPost.find({})
    res.json(blog)
}).post("/", async (req,res)=>{
    try {
        const newblogpost = new blogPost(req.body);
        await newblogpost.save();
        res.status(201).send(newAuthor);
    } catch (error) {
        next()
    }
})

export default blogRouter;