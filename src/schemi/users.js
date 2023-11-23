import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    nome: {
        type: String
    },
    cognome: {
        type: String
    },
    email: {
        type: String
    },
    data_di_nascita: {
        type: String
    },
    avatar: {
        type: String
    }
})

export const user = mongoose.model("users", userSchema);