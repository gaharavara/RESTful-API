const express = require("express"); // Express Application e.g. Express makes handling requests a bit easier

const app = express(); // Spins up express as a function which makes all the utilities of an express app available to us

//use sets up a middleware

/*
app.use((req, res, next) => {

    res.status(200).json({
        message: "It works!"
    });

});
*/

const productRoute = require('./api/products'); // Import the products route
const orderRoute = require('./api/order'); //Import the order route

app.use('/products',productRoute); // every request to /products is handled by productRoute (api/products.js file)
app.use('/order', orderRoute);
module.exports = app;