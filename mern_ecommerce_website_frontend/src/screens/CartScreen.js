import React, { useEffect } from 'react'
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {

  // const productId = useParams().id
  // const location = useLocation()  //as we also need the quantity
  const navigate = useNavigate()  //used to redirect (like history)
  // const qty = location.search ? Number(location.search.split('=')[1]) : 1 //if there is any search element('?') on 
  //address then split the right side of search into two halves. Like: ...?qty=1, array = ['qty','1']. Here we want the quantity in numbers
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart) //selecting the state of the cartItems
  const { cartItems } = cart  //destructuring the state to get cartItems

  // useEffect(() => {
  //   if (productId) {
  //     dispatch(addToCart(productId, qty)) //we've to dispatch addToCart since it is a action
  //   }
  // }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    // dispatch(removeFromCart(id))
    console.log('removed')
  }

  const checkoutHandler = () => {
    navigate('/login/?redirect=/shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping cart</h1>
        {cartItems.length === 0 ? <Message> Your cart is empty <Link to='/'> Go back</Link> </Message> : (
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item key={item.product}> {/* A ListGroup should've a key, here it is item's id(see cartActions.js*/}
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.image} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}></Link>
                  </Col>
                  <Col md={2}>
                    ${item.price}
                  </Col>
                  <Col md={2}>
                    <Form.Control as='select' value={item.qty} onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))} >  {/*instead of setQty we want to directly add the no. of items to cart.
                       It also helps in changing the subtotal value instantly if the qty is changed */}
                      {[...Array(item.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1} style={{ color: "#f52da6", backgroundColor: "#f7deed" }}>{x + 1} </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}>
                      <i className='fas fa-trash' /></Button> {/*delete the item from cart */}
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>  {/*This col will have price, subtotal, etc */}
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item >
              {/*Reduce takes a function and a initial value(here initial value = 0) */}
              <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
              ${cartItems.reduce((acc, item) => acc + (item.qty * item.price), 0).toFixed(2)} {/*Price fixed to 2 decimal places */}
            </ListGroup.Item>
            <ListGroup.Item >
              <Button type='button' className='w-100' disabled={cartItems.length === 0} onClick={checkoutHandler}>Proceed to checkout</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen