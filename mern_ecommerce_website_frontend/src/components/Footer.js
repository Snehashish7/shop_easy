import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className='footer'
    // style={{
    //   position: "fixed",
    //   left: 0,
    //   bottom: 0,
    //   right: 0,
    //   // backgroundColor: "green"
    // }}
    >
      <footer>
        <Container>
          <Row>
            <Col className='text-center py-3'> {/* py-3 => padding on the y-axis by 3 pixels */}
              Copyright &copy; ShopEasy
            </Col>
          </Row>
        </Container>
      </footer>
    </div>)
}

export default Footer