import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    category: {
        type: String,
    },
    title: {
        type: String,
    },
    cover: {
        type: String,
    },
    readTime: {
        value:Number,
        unit: String,
    },
    author: {
        type:Schema.Types.ObjectId,
        ref:"users",
    },
    content:{
        type:String,
    }
})

export const blogPost = mongoose.model("blogPost", blogSchema);