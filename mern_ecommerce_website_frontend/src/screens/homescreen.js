import React, { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
// import products from '../products'
import axios from 'axios'
const HomeScreen = () => {
    //instead of importing products(containing list of products) we can link it with backend 
    //so that it fetches product data from server:
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products/');//axios returns a promise therefore async await
            setProduct(data);
        };

        fetchProducts();
    }, []);

    return (
        <>
            <h1>Latest Collections</h1>
            <Row> {/* similar to <div className = 'row'></div> */}
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} className='product-col' > {/* for small(sm) devices each product takes 12 col */}
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen