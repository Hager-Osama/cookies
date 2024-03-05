import React from "react";

import { Col, Container, Row, Button } from "react-bootstrap";
import FormateCurrency from "../flashDeals/formateCurrency";

const Cartpagecomponent = ({
  item,
  decreaseCartQuantity,
  increaseCartQuantity,
  cartQuantity,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#e7d6c2",
      }}
    >
    
      <Container className="  ">
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
            <span className="fs-4"> {item.quantity} </span>
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
