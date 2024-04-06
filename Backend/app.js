const express = require('express');
const app=express();
const cors = require('cors');
require('dotenv').config(); 
const userRoutes = require('./routes/userRoute');
const authRoutes = require('./routes/authRoute');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.error("Error connecting to DB:", error);
    });
app.listen(4000,()=>{
    console.log('server listening on port 4000')
})
app.use("/user",userRoutes);
app.use("/auth",authRoutes)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });