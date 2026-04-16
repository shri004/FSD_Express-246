const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./src/config/db')
const productRoutes = require('./src/routes/productRoutes');
const logger = require("./src/middelware/logger");
const errorHandler = require("./src/middelware/errorHandler");

dotenv.config(); //read .env file secrets
connectDB()      //call connectDB
const app =express();

//Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));  //allow form data
app.use(logger) // call the logger made in middleware

//Health checkup
app.get('/', (req,res) => {               // "/" represents home, so here we are setting a display message
    res.json({ message:'Product API is running'});
});

app.use('/api/products', productRoutes);

//error handling
 app.use(errorHandler); // call the error handler made in middleware

//start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});