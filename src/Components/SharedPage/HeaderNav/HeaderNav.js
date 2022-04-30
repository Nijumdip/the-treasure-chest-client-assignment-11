import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HeaderNav.css";

const HeaderNav = () => {
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="https://i.ibb.co/R7Tm8VS/logo-green.png" alt="" />
          The Treasure Chest
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/home">Home</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/manage">Manage Inventories</Link>
            <Link to="/blogs">Blogs</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
