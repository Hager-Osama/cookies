import React from "react";
import { Container, Nav, FormControl } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import MaskGroup from "../../images/MaskGroup.png";
import "./NavBar.css"

const NavBar = () => {
  return (
    <Navbar
      className="sticky-top "
      
      expand="sm"
    >
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={MaskGroup} className="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="Search..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <Nav.Link
              href="/login"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "#f17228" }}
            >
              <i class="fa-solid fa-user"></i>
              <p>login</p>
            </Nav.Link>
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "#f17228" }}
            >
              <i class="fa-solid fa-cart-shopping"></i>
              <p>cart</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;