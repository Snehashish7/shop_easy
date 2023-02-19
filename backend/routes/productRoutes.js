// import express from 'express'
// import asyncHandler from 'express-async-handler'
// // import { getProducts, getProductById, deleteProduct, updateProduct, createProduct, createProductReview,getTopProducts } from '../controllers/productController.js'
// // import { admin, protect } from '../middleware/authMiddleware.js'
// const router = express.Router()
// import Product from '../models/productModel.js'

// // router.route('/').get(getProducts).post(protect, admin, createProduct)
// // router.route('/top').get(getTopProducts)

// router.route('/',
//   asyncHandler(async (req,res) => {
//     const products = await Product.find({})
//     res.json(products)
//   })
// )
// router.route('/:id/reviews').post(protect, createProductReview)

// export default router

import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc: Fetch all product
// @route: GET req to api/product
// @access: Public
router.get('/', asyncHandler(async (req, res) => {    //we are directing this to home route instead of /api/products 
  //because in server.js it will point to productRoutes only when it gets /api/products

  const products = await Product.find({})   //gives us all the products
  res.json(products)
}))

// @desc: Fetch single product
// @route: GET req to api/product/:id
// @access: Public
router.get('/:id', asyncHandler(async (req, res) => {

  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status('404')
    throw new Error('product not found')
  }
}))
// router.route('/:id/reviews').post(protect, createProductReview)
export default router