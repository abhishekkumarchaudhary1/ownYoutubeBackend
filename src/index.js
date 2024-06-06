import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

console.log(process.env.TEST);



dotenv.config({
    path: "./env"
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB CONNECTION FAILED !!! ", err);
})



















/*
import express from "express"
const app = express()

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("EXPRESS-DB CONNECTION ERROR: ",error);
            throw error;
        })

        app.listen(process.env.port, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("DB CONNECTION ERROR: ",error)
        throw error;
    }
} )()
*/