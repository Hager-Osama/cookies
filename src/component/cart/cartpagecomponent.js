import React from "react";
import NavBar from "../navbar/NavBar";
import { Col, Container, Row, Button } from "react-bootstrap";
import FormateCurrency from "../flashDeals/formateCurrency";

const Cartpagecomponent = (
  item,
  decreaseCartQuantity,
  increaseCartQuantity,
  cartQuantity,

) => {


  return (
    <div
      style={{
        backgroundColor: "#e7d6c2",
        height: "5000px",
      }}
    >
      <NavBar />
      <Container className="   ">
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

        <Row>
          <Col>
            <img
              src={item.mealId.image?.url}
              alt="cart-img"
              style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
              <div>{item.mealId.title}</div>
            </div>
          </Col>
          <Col md="auto">
            <Button onClick={() => decreaseCartQuantity(item.mealId)}>-</Button>
            <span className="fs-4"> {item.quantity}  </span>
            <Button onClick={() => increaseCartQuantity(item.mealId)}>+</Button>
          </Col>
          <Col xs lg="2">
            <div>{FormateCurrency(item.mealId.price * item.quantity)}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Cartpagecomponent;