import React from "react";

import { Col, Container, Row,  } from "react-bootstrap";
import FormateCurrency from "../flashDeals/formateCurrency";

const Cartpagecomponent = ({
  item,
  decreaseCartQuantity,
  increaseCartQuantity,
}) => {
  
  return (
    <div
      style={{
        backgroundColor: "#e7d6c2",
      }}
    >
      <Container>
        <Row className=" pt-3 pb-3 ">
          <Col>
            <img
              src={item.mealId.image.url}
              alt="cart-img"
              style={{
                width: "125px",
                height: "75px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <span className="fs-5 px-2">{item.mealId.title}</span>
          </Col>

          <Col xs="auto">
            <button
              style={{
                outline: "none",
                borderRadius: "40%",
                border: "1px solid #000",
                fontWeight: "bold",
              }}
              onClick={() => decreaseCartQuantity(item.mealId)}
            >
              -
            </button>
            <span className="fs-6"> {item.quantity} </span>
            <button
              style={{
                outline: "none",
                borderRadius: "40%",
                border: "1px solid #804b24",
                fontWeight: "bold",
              }}
              onClick={() => increaseCartQuantity(item.mealId)}
            >
              +
            </button>
          </Col>

          <Col  xs="2" >
            <div>{FormateCurrency(item.mealId.price * item.quantity)}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Cartpagecomponent;
