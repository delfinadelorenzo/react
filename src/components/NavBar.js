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
      <Navbar className='navBar' >
        <Container fluid >
          <Navbar.Brand> <Link to="/" className='HomePage' >B R A V E  Swimwear </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item > <Link to="/category/bikinis"> Bikinis </Link>  </NavDropdown.Item>
                <NavDropdown.Item > <Link to="/category/enterizas"> Enterizas</Link>     </NavDropdown.Item>
                <NavDropdown.Item > <Link to="/category/summer">Summer Sale! </Link>   </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link> <Link to="/comocomprar">Como comprar</Link> </Nav.Link>
            </Nav>
            <Link to="/cart">
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
