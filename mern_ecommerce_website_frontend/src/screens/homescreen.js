import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import products from "../products"
const homescreen = () => {
    return (
        <>
            <h1>Latest Collections</h1>
            <Row> {/* similar to <div className = 'row'></div> */}
                {products.map(product => (
                    <Col key = {product._id} sm={12} md={6} lg={4} xl={3} className= 'product-col' > {/* for small(sm) devices each product takes 12 col */}
                        <Product product = {product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default homescreen