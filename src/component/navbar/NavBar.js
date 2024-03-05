import React, { useEffect, useState } from "react";
import { Container, Nav, FormControl, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";
import "./NavBar.css";
import AuthLocalUtils from "../../pages/local_utils";
import { useShoppingCart } from "../context/shoppingCartContext";
import { useFlashDealsProvider } from "../flashDeals/FlashDealsData";
const NavBar = () => {
  const { openCart, cartQuantity, clearCartFromMemory } = useShoppingCart();
  const {fetchData} = useFlashDealsProvider();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const currentLocalUser = AuthLocalUtils.getLoginData();
    setUser(currentLocalUser);
  }, [null]);

  return (
    <Navbar className="sticky-top shadow-sm  bg-white " expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img
              src={logo}
              style={{ width: "70px", height: "70px" }}
              alt="logo"
            />
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
                className="nav-text d-flex mt-1 justify-content-center"
                style={{ color: "rgb(128 75 36)" }}
              >
                <i className="fa-regular fa-user"></i>
                {user.userName}
              </Nav.Link>
            ) : (
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-1 justify-content-center"
                style={{ color: "rgb(128 75 36)" }}
              >
                <i className="fa-regular fa-user"></i>
                Login
              </Nav.Link>
            )}
            <Nav.Link
              href="/wishlist"
              className="nav-text d-flex mt-1 justify-content-center"
              style={{ color: "rgb(128 75 36)" }}
            >
              <i className="fa-regular fa-heart"></i>
              Wishlist
            </Nav.Link>
            <Nav.Link
              href='/cart'
              className="rounded-circle d-flex mt-1 justify-content-center"
              style={{
                color: "rgb(128 75 36)",
                position: "relative",
                margin: " auto",
                top: "2px",
              }}
              >
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
              <div
                className="rounded-circle bg-success d-flex justify-content-center align-items-center;"
                style={{
                  position: "absolute",
                  color: "white",
                  width: "1.25rem",
                  height: "1.25rem",
                  transform: "translate(25%, 25%)",
                  bottom: 0,
                  right: 0,
                  alignItems: "center",
                }}
              >
                {cartQuantity}
              </div>
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {user !== null ? (
          <Button
            variant="outline-success"
            className=" mx-2 mt-2"
            type="text"
            onClick={() => {
              AuthLocalUtils.deleteLoginData();
              setUser(null);
              clearCartFromMemory();
              fetchData();
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
