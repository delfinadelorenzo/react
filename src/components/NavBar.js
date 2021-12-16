import React from 'react'
import { Navbar, Container, Nav , NavDropdown } from 'react-bootstrap'

export default function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" >
  <Container>
    <Navbar.Brand href="#home">BRAVE BIKINIS</Navbar.Brand>
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
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
