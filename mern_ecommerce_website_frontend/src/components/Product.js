import React from 'react'

import {Link} from 'react-router-dom' //the <a href = ''></a> will be replaced by <Link to = ''/> to prevent refreshing the
// page... Since we are making a single page application line flipkart, Facebook

import { Card } from 'react-bootstrap'
// import products from '../products'
import Rating from './Rating'

const Product = ({ product }) => { /* using destructuring to directly get product instead of taking props as 
parameter and writing everywhere props.this,props.that.... */
    return (
        <Card className='my-3 p-3' style={{ minHeight: "80%", maxHeight: "80%" }}>  {/* react-Bootstrap Card ,my-> margin in y-axis,p-3 padding by 3 units all around*/}
            <Link to={`/product/${product._id}`}>  {/* the product is linked to its id */}
                <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>  {/* the product is linked to its id */}
                    <Card.Title as='h6'><strong>{product.name}</strong></Card.Title>
                </Link>

                <Card.Text as='div'>
                    <div className='my-2'>
                        {/* {product.rating}✪ from {product.numReviews} reviews. */}
                        <Rating value = {product.rating} text = {" "+product.numReviews+" reviews"} color ='#f8e825'/>
                    </div>
                </Card.Text>
                <Card.Text>
                    <div className="h4">${product.price}</div>
                </Card.Text>
            </Card.Body>


        </Card>
    )
}


export default Product