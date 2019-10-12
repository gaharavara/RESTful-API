const express = require("express");
const router = express.Router();

// For get request
router.get('/',(req, res, next) => {
    res.status(200).json({
        message: "A get response for order page"
    })
});

// For post request
router.post('/',(req, res, next) => {
    res.status(200).json({
        message: "A post response of order page"
    })
});

// :varName acts as var name and the value can be extracted from it
router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId; // store the value of orderId extracted from url
    if(id === "101"){
        res.status(200).json({
            message: "This is a lucky order",
            id: id
        });
    } else {
        res.status(200).json({
            message: "This is order "+id+" !"
        });
    }
});

// For patch request
router.patch('/',(req, res, next) => {
    res.status(200).json({
        message: "A patch response of order page | Updated order"
    })
});

// For delete request
router.delete('/',(req, res, next) => {
    res.status(200).json({
        message: "A delete response of order page | Deleted order"
    })
});

module.exports = router;