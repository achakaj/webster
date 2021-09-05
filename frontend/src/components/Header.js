import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Feader = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
  <Container>
    <Navbar.Brand href="/">Webster</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/cart"><i class="fas fa-shopping-cart"></i> Cart</Nav.Link>
        <Nav.Link href="/login"><i class="fas fa-user"></i> Sign In</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Feader
