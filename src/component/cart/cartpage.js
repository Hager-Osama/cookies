import React, { useEffect, useState } from "react";
import Cartpagecomponent from "./cartpagecomponent";
import { useShoppingCart } from "../context/shoppingCartContext";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavBar from "../navbar/NavBar";
import FormateCurrency from "../flashDeals/formateCurrency";
import { useNavigate } from "react-router-dom";
const Cartpage = () => {
  const {
    cartQuantity,
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (sum, item) => sum + item.mealId.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const navigate = useNavigate();

  const handleAddItemsClick = () => {
    navigate('/'); 
  };
  const handleCheckOutClick=()=>{
    navigate('/checkout'); 
  }
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

          <Col xs="auto" className="text-muted mx-3">
            <h6>Qty</h6>
          </Col>

          <Col xs="2" className="text-muted">
            <h6>Total</h6>
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
      ))}
      <Container>
        <Row className="mt-2">
          <Col sm={8}>
          <div className="d-flex justify-content-start gap-2  ">
            <Button variant="outline-success" onClick={handleAddItemsClick}>+ ADD MORE ITEMS </Button>
            <Button variant="success" onClick={handleCheckOutClick}> CHECKOUT </Button>
          </div>
          </Col>
          <Col sm={4}> 
            <div className="d-flex justify-content-end gap-2" style={{fontWeight:"bold"}}>
              <p>Total Price</p>
              <p style={{ color: " #F75C0B" }}>{FormateCurrency(totalPrice)}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cartpage;
