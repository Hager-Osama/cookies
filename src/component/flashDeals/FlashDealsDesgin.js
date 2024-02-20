import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import FormateCurrency from "./formateCurrency";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
const FlashDeals = ({ imgUrl, name, price, id }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        variant="top"
        style={{ height: "250px", objectFit: "cover", position: "relative" }}
      />
      <div style={{ position: "absolute", right: 0, color: "red" }}>
        <i className="fa-regular fa-heart"></i>
      </div>
      <Card.Body>
        <Card.Title className="mb-3 d-flex align-items-baseline justify-content-between">
          <span className="fs-4">{name}</span>
          <span className="me-2 text-muted fs-6 ">
            {FormateCurrency(price)}
          </span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span className="fs-4"> {quantity} in cart </span>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItemFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default FlashDeals;
