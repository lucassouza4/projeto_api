import mongoose from "mongoose";

mongoose.connect("connection");
let db = mongoose.connection;

export default db; 