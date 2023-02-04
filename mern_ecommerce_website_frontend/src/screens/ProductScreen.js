import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
// import products from '../products'

function ProductScreen() {

  /*
    <Route path='/product/:id' element={<ProductScreen />} /> <-- App.js
    Here using useParams() we get the id that was passed as 
    parameter in route path in string form. If we wish to convert it into number then
    const{ id } = Number(useParams())
  */

  const { id } = useParams();
  // const product = products.find((p) => p._id === id);

  const [product,setProduct] = useState([])
  useEffect(() => {

    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${id}`)
      setProduct(data);
    }

    fetchProduct()
  },[])
  return (
    <>
      <Link className="btn btn-secondary my-3" to='/'>Go back</Link>
      <Row>
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
              <ListGroup.Item>
                {/* <Link to = '/cart'> */}
                <div class="d-grid gap-2">
                  <Button
                    class="btn btn-lg btn-primary"
                    type="button"
                    disabled = {product.countInStock === 0}
                    ><strong>Add to Cart</strong>
                  </Button>
                </div>
                {/* </Link> */}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductScreen