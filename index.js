const express = require("express")

const app = express();
app.use(express.static("public"))
app.listen(3000,()=>{
    console.log("the servier is on using port 3000")
})


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})