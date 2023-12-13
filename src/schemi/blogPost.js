import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    category: {
        type: String,
        require:true,
    },
    title: {
        type: String,
        require:true,
    },
    cover: {
        type: String,
        require:true,
    },
    readTime: {
        value:Number,
        unit: String,
    },
    author: [{
        type:Schema.Types.ObjectId,
        ref:"users",
    }],
    content:{
        type:String,
        require:true,
    },
    comments{
        type
    }
})

export const blogPost = mongoose.model("blogpost", blogSchema);