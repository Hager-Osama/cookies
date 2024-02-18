import React, { useEffect, useState } from "react";
import { Container, Nav, FormControl, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import MaskGroup from "../../images/MaskGroup.png";
import "./NavBar.css";
import AuthLocalUtils from "../../pages/local_utils";
const NavBar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const currentLocalUser = AuthLocalUtils.getLoginData();
    setUser(currentLocalUser);
  }, [null]);
  return (
    <Navbar className="sticky-top shadow-sm mb-2 bg-white " expand="sm">
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
                style={{ color: "#f17228", fontWeight: "bold" }}
              >
                <i className="fa-solid fa-user"></i>
                <p>{user.userName}</p>
              </Nav.Link>
            ) : (
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
                style={{ color: "#f17228", fontWeight: "bold" }}
              >
                <i className="fa-solid fa-user"></i>
                <p>Login</p>
              </Nav.Link>
            )}

            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{
                color: "#f17228",
                fontWeight: "bold",
                position: "relative",
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <p>cart</p>
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center;"
                style={{
                  position: "absolute",
                  color: "white",
                  width: "1.25rem",
                  height: "1.25rem",
                  transform: "translate(25%, 25%)",
                  bottom:16,
                  right: 0,
                  alignItems: "center",
                }}
              >
                3
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {user !== null ? (
          <Button
            variant="outline-success"
            className="rounded-circle mx-3"
            type="text"
            onClick={() => {
              AuthLocalUtils.deleteLoginData();
              setUser(null);
            }}
          >
            logout
          </Button>
        ) : null}
      </Container>
    </Navbar>
  );
};

export default NavBar;
