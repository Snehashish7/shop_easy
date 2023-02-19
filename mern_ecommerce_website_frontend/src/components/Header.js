import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'// Same as Link of router-dom except 
//that is is used to wrap boostrap components
import '../index.css'
import { Navbar, Nav,Container} from 'react-bootstrap'


const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-primary" collapseOnSelect>
        {/* <Navbar bg = "dark" variant = "dark" expand = "lg" collapseOnSelect> */}
        <Container>

          <LinkContainer to="/">
            <Navbar.Brand >ShopEasy</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto"> {/* ms(margin-shift)-auto shifts the cart and Sign In to the right */}
              <LinkContainer to="/cart">
                <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>{/* fas-> font-awesome-library */}
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header