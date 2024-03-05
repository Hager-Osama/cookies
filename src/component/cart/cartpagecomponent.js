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
      <Container>
        <Row className=" pt-3 ">
          <Col>
            <img
              src={item.mealId.image.url}
              alt="cart-img"
              style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
              <div>{item.mealId.title}</div>
            </div>
          </Col>
          <Col md="auto">
            <button
              style={{
                outline: "none",
                borderRadius: "50%",
                border: "1px solid #804b24",
              }}
              onClick={() => decreaseCartQuantity(item.mealId)}
            >
              -
            </button>
            <span className="fs-5"> {item.quantity} </span>
            <button
              style={{
                outline: "none",
                borderRadius: "50%",
                border: "1px solid #804b24",
              }}
              onClick={() => increaseCartQuantity(item.mealId)}
            >
              +
            </button>
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
