const express= require("express")
const dotenv= require("dotenv").config()

const app=express()

const PORT= process.env.PORT || 5002

app.listen(PORT,()=>{
    console.log(`app running on port ${PORT}`)
})


app.get('/message',(req,res)=>{
    res.send("hello message")
})
