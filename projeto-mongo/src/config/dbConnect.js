import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lucas:00726854@cluster0.n2ois.mongodb.net/?retryWrites=true&w=majority");
let db = mongoose.connection;

export default db; 