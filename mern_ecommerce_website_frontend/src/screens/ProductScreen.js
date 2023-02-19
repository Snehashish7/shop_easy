import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'
// import axios from 'axios'  //Just like homescreen we do not need axios here
// import products from '../products'

function ProductScreen() {
  const [qty, setQty] = useState(1)
  /*
    <Route path='/product/:id' element={<ProductScreen />} /> <-- App.js
    Here using useParams() we get the id that was passed as 
    parameter in route path in string form. If we wish to convert it into number then
    const{ id } = Number(useParams())
  */
  const { id } = useParams();

  const dispatch = useDispatch()

  // const [product,setProduct] = useState([])
  //the way we get the product data is by using useSelector()
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails
  useEffect(() => {

    dispatch(listProductDetails(id))
    // const fetchProduct = async () => {
    //   const {data} = await axios.get(`/api/products/${id}`)
    //   setProduct(data);
    // }
    // fetchProduct()
  }, [dispatch, id])
  // <Route path="/cart" element={<CartScreen />} />
  const navigate = useNavigate()
  const addToCartHandler = () => {
    /*This method adds a new entry to the history stack. This allows developers to programmatically control the 
    browser's history and change the URL displayed in the address bar without reloading the page.*/
    // history(`/cart/${id}?qty=${qty}`)  //custom URL creation
    dispatch(addToCart(id, qty))
    navigate('/cart')
  }


  return (
    <>
      <Link className="btn btn-secondary my-3" to='/'>Go back</Link>
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (<Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid /> {/*fluid organizes img accr to viewport*/}
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={" " + product.numReviews + " reviews"} color='#f8e825' />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item><strong>Description:</strong>{'  ' + product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>$ {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock!!'}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (<ListGroup.Item>{/*'&&'in React implies 'then' in short */}
                <Row>
                  <Col>Qty</Col>
                  <Col>
                    <Form.Control as='select' value={qty} onChange={(e) =>
                      setQty(e.target.value)}>
                      {//in this javascript code we want to have the countInStock as an
                        //array like : [0,1,2,3,4] in countInStock = 5
                        [...Array(product.countInStock).keys()].map((x) => (  //this will spread out the keys in array form
                          <option key={x + 1}
                            value={x + 1}
                            style={{ color: "#f52da6", backgroundColor: "#f7deed" }}>
                            <strong>{x + 1}</strong></option> //we will have option in qty dropdown
                        ))
                      }
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>)}

              <ListGroup.Item>
                {/* <Link to = '/cart'> */}
                <div class="d-grid gap-2">
                  <Button
                    onClick={addToCartHandler}
                    class="btn btn-lg btn-primary"
                    type="button"
                    disabled={product.countInStock === 0}
                  ><strong>Add to Cart</strong>
                  </Button>
                </div>
                {/* </Link> */}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>)}
    </>
  );
}

export default ProductScreen