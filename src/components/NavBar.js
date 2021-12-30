import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg" >
        <Container fluid >
          <Navbar.Brand> <Link to="/">B R A V E  Swimwear </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item > <Link to="/bikinis"> Bikinis </Link>  </NavDropdown.Item>
                <NavDropdown.Item > <Link to="/enterizas"> Enterizas</Link>     </NavDropdown.Item>
                <NavDropdown.Item > <Link to="/summer">Summer Sale! </Link>   </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link> <Link to="/comocomprar">Como comprar</Link> </Nav.Link>
            </Nav>
            <div> <CartWidget /></div>
            <Nav>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
