import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'   //for productActions
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
// import {useParams } from 'react-router-dom'
// import products from '../products'
// import axios from 'axios' //no need now since we are importing actions
const HomeScreen = () => {
    //instead of importing products(containing list of products) we can link it with backend 
    //so that it fetches product data from server:
    // const [products, setProduct] = useState([]);

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList) //useSelector() takes the state and maps to the part of the state
    const { loading, error, products } = productList
    useEffect(() => {
        // const fetchProducts = async () => {  //no need now since we are importing actions
        //     const { data } = await axios.get('/api/products/');//axios returns a promise therefore async await
        //     //we could've also written:
        //     // const res = await axios.get('/api/products/');
        //     // setProduct(res.data).... but we destructure the res to get the data directly

        //     setProduct(data); // put the 'data' in 'products' that we got from /api/products
        // };

        // fetchProducts();
        dispatch(listProducts())  //this already contains axios that fetch data so we do not 
        //need to use axioms and fetch data here
        /*order of flow : 1)homescreen listProducts() call from dispatch()
                        2) listProducts() in productActions requests data and after receiving it dispatches the result type(success/error) and its payload
                        3) the productReducers receives type and payload of actions from listProducts()*/
    }, [dispatch]);
    return (
        <>
            <h1>Latest Collections</h1>
            {loading ? (<Loader />) : error ?
                (<Message variant='danger'>{error}</Message>) : (
                    <Row> {/* similar to <div className = 'row'></div> */}
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3} className='product-col' > {/* for small(sm) devices each product takes 12 col */}
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>)}

        </>
    )
}

export default HomeScreen