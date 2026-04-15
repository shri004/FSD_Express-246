const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./src/config/db')

dotenv.config(); //read .env file secrets
connectDB()      //call connectDB
const app =express();

//Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Health checkup
app.get('/', (req,res) => {
    res.json({ message:'Product API is running'});
});

//start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});