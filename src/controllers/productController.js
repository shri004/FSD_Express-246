const Product = require('../models/Product');

//create functions

//1. create getAllProducts api
const getAllProducts = async (req, res,next) => {
    try{
        const {category, minPrice, maxPrice} = req.query; //destructure
        const filter = {}; //empty object to store the data

        if (category) filter.category = category;
        if (minPrice) filter.price = {$gte: Number(minPrice)}
        if (maxPrice) filter.price = {...filter.price, $lte: Number(maxPrice)} //...filter.price used to fetch the existing value from above

        //fetch
        const products = await Product.find(filter).sort({createdAt: -1}); //after async is done, now we use await , wait n fetch products (we call filter variable created). find, sort etc are all these functions built-in by mongoose

        res.status(200).json({
            success:true,
            count: products.length, //count he products shown. products is used , since we used products in await to catch response
            data: products
        })

    } catch(error){
        next(error) //middleware will handle the error, thus reduces effort
    }
};

//2.Get one product api
const getProductById = async(req, res,next) => {
    try{
        const product = await product.findById(req.params.id) //findById provide by mongoose, req.params.id we get from the url
        if(!product) {
            const error = new Error('Product does not exist');
            error.status = 404;
            return next(error)
        }res.status(200).json( {
            success:true,
            data: product
         })
    }
    catch(error){
        next(error)
    }
}
module.exports = {
    getAllProducts, getProductById
}