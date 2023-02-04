import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc: Fetch all product
// @route: GET req to api/product
// @access: Public
router.get('/', asyncHandler(async(req, res) => {    //we are directing this to home route instead of /api/products 
    //because in server.js it will point to productRoutes only when it gets /api/products

    const products = await Product.find({})   //gives us all the products
    res.json(products)
}))

// @desc: Fetch single product
// @route: GET req to api/product/:id
// @access: Public
router.get('/:id', asyncHandler(async(req, res) => {

    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else {
        res.status('404').json({message: 'Product not found'})
    }
}))

export default router