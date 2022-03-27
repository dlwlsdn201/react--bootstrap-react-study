import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Binary Woo의 개발 블로그</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
            <NavDropdown title="Study" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Front-end</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Back-end</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Database</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Network</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">etc</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Project" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                #1. Project
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                #2. Project
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Album</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
