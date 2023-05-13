import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarr() {
  return (
    <div>
        <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"> About me </Nav.Link>
            <Nav.Link href="#features">messages</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
   
  )
}

export default Navbarr