import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config()


connectDB()
.then(()=>{
        app.on("error", (error)=> {
        console.log("Error: ", error);
        throw error
      })

  app.listen(process.env.PORT || 8000, ()=>{
    console.log("server is listening")
  })

})









/*

;( async () => {
    try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

      app.on("error", (error)=> {
        console.log("Error: ", error);
        throw error
      })

      app.listen(process.env.PORT, ()=> {
        console.log(`App is listening on port ${process.env.PORT}`)
      })


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


// app.listen(port, ()=> {
//     console.log("Server is listeing");
// })

*/