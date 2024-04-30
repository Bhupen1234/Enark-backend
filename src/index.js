require('dotenv').config({path:'src/.env'})
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bookRoutes = require("./routes/bookRoutes");
const cors = require("cors");
//connect to mongoDB
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.use("/api/books",bookRoutes);
mongoose.connect(MONGODB_URI).then(()=>console.log('Connected to MongoDB')).catch((err)=>console.log(err))
app.get("/",(req,res)=>{
    res.send("Backend Server is running")
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})