const express = require("express");
const router = express.Router();

// For get request
router.get('/',(req, res, next) => {
    res.status(200).json({
        message: "A get response for products page"
    })
});

// For post request
router.post('/',(req, res, next) => {
    res.status(200).json({
        message: "A post response of products page"
    })
});

// :varName acts as var name and the value can be extracted from it
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId; // store the value of productId extracted from url
    if(id === "101"){
        res.status(200).json({
            message: "This is a lucky product",
            id: id
        });
    } else {
        res.status(200).json({
            message: "This is product "+id+" !"
        });
    }
});

// For patch request
router.patch('/',(req, res, next) => {
    res.status(200).json({
        message: "A patch response of products page | Updated product"
    })
});

// For delete request
router.delete('/',(req, res, next) => {
    res.status(200).json({
        message: "A delete response of products page | Deleted product"
    })
});

module.exports = router;