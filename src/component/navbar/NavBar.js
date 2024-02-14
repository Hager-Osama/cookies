import React from "react";
import { Container, Nav, FormControl, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import MaskGroup from "../../images/MaskGroup.png";
import "./NavBar.css";
import AuthLocalUtils from "../../pages/local_utils";
const NavBar = () => {
  const user = AuthLocalUtils.getLoginData();
  return (
    <Navbar className="sticky-top " expand="sm">
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
            {user ? (
              <Nav.Link
                href="/profile"
                className="nav-text d-flex mt-3 justify-content-center"
                style={{ color: "#f17228" }}
              >
                <i className="fa-solid fa-user"></i>
                <p>Profile</p>
              </Nav.Link>
            ) : (
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
                style={{ color: "#f17228" }}
              >
                <i className="fa-solid fa-user"></i>
                <p>Login</p>
              </Nav.Link>
            )}
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "#f17228" }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <p>cart</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {user !== null ? (
          <Button type="text" onClick={() => {}}>
            logout
          </Button>
        ) : null}
      </Container>
    </Navbar>
  );
};

export default NavBar;
