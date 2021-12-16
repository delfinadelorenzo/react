import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg" >
        <Container fluid >
          <Navbar.Brand href="#home">B R A V E  Swimwear</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Bikinis</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Enterizas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Summer Sale!</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Como comprar</Nav.Link>
            </Nav>
            <div> <CartWidget/></div>
            <Nav>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
