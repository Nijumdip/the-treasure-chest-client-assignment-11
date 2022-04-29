import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const HeaderNav = () => {
  return (
    <Navbar bg="" variant="light">
      <Container>
        <Navbar.Brand href="#home">The Treasure Chest</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Inventory</Nav.Link>
          <Nav.Link href="#pricing">Blogs</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
