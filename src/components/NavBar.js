import React, { useContext } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import  "./NavBar.scss"

export default function NavBar() {
  const { cantItems }= useContext (CartContext);
  return (
    <div>
      <Navbar className='navBar' expand="lg">
        <Container fluid >
          <Navbar.Brand> <Link to="/" className='HomePage' >B R A V E  Swimwear </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Shop" id="basic-nav-dropdown" className='linkTo' >
                <NavDropdown.Item > <Link to="/category/bikinis" className='linkTo' > Bikinis </Link>  </NavDropdown.Item>
                <NavDropdown.Item > <Link to="/category/enterizas" className='linkTo' > Enterizas</Link>     </NavDropdown.Item>
                <NavDropdown.Item > <Link to="/category/summer" className='linkTo' >Summer Sale! </Link>   </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link> <Link to="/comocomprar" className='linkTo' >+ Info</Link> </Nav.Link>
            </Nav>
            <Link to="/cart"  className='linkTo'>
              <CartWidget />
              {cantItems > 0 ? cantItems : ""}
            </Link>
            <Nav>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
