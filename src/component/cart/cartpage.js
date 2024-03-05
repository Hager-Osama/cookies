import React from "react";
import Cartpagecomponent from './cartpagecomponent'
import { useShoppingCart } from "../context/shoppingCartContext";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../navbar/NavBar";
const Cartpage = () => {
  const {
    cartQuantity,
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();

  return (
    <>
        <NavBar />
        <Container>
        <Row>
          <Col>
            <div className="d-flex ">
              <h2>Cart </h2>
              <div
                className="rounded-circle d-flex justify-content-center align-items-center m-1 "
                style={{
                  color: "white",
                  width: "1.60rem",
                  height: "1.60rem",
                  transform: "translate(25%, 25%)",
                  alignItems: "center",
                  backgroundColor: "#000",
                }}
              >
                {cartQuantity}
              </div>
            </div>
          </Col>

          <Col md="auto" className="text-muted">
            <h3>Qty</h3>
          </Col>

          <Col xs lg="2" className="text-muted">
            <h3>Total</h3>
          </Col>
        </Row>
        </Container>
      {cartItems.map((item) => (
        <Cartpagecomponent
          key={item.mealId._id}
          item={item}
          increaseCartQuantity={increaseCartQuantity}
          decreaseCartQuantity={decreaseCartQuantity}
          cartQuantity={cartQuantity} 
        />
      ))}{" "}
    </>
  );
};

export default Cartpage;
