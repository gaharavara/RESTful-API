const express = require("express"); // Express Application e.g. Express makes handling requests a bit easier

const app = express(); // Spins up express as a function which makes all the utilities of an express app available to us
const morgan = require("morgan"); // By default shows the logs for the app
// Use sets up a middleware

/*
app.use((req, res, next) => {

    res.status(200).json({
        message: "It works!"
    });

});
*/

const productRoute = require('./api/products'); // Import the products route
const orderRoute = require('./api/order'); //Import the order route

app.use(morgan('dev')); // Middleware for showing the logs by default using the morgan dependecy 

app.use('/products',productRoute); // Every request to /products is handled by productRoute (api/products.js file)
app.use('/order', orderRoute);

// Error handling for urls that are not defined by us in app.use() for handling
app.use((req, res, next) => {
    const error = new Error('Not Found'); // Creating an Error object that is by default present in node
    error.status = 404;
    next(error);
});

// In case the error is not caused by  the url instead it is a database or similiar kind of error we use the below method
// for handling
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;