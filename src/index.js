import mongoose from "mongoose";
import express from "express";

const app = express();




;( async () => {
    try{
        mongoose.connect('${process.env.MONGODB_URI}')
    }catch (error){
        console.log("Error" , error)
    }
})()


app.get("/", (req, res) => {
    res.send("server is ready broooo....");
})



/////get api with endpoint jokes
app.get("/jokes", (req, res) => {

    const jokes = [{
        "id" : 1,
        "title" : "This is the title",
        "content" : "THis is the content"
    }];

    res.send(jokes);
})


const port = process.env.PORT || 3000;


app.listen(port, ()=> {
    console.log("Server is listeing");
})