import mongoose, { Schema } from "mongoose";

const userDBschema = new Schema({
  isActive: { type: Boolean },
  balance: { type: Number },
  picture: { type: String },
  age: { type: Number },
  eyeColor: { type: String },
  name: {
    first: { type: String },
    last: { type: String }
  },
  company: { type: String },
  email: { type: String },
  phone: { type: Number }
})

export const userDB = mongoose.model("m6d3", userDBschema);