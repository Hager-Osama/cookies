import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import FormateCurrency from "./formateCurrency";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { axios } from "axios";
const FlashDealCard = ({ meal, onFavoriteClick }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(meal) || 0;

  return (
    <Card className="h-100">
      <Card.Img
        src={meal.image?.url}
        variant="top"
        style={{ height: "250px", objectFit: "cover", position: "relative" }}
      />

      <div className="favourite" style={{ color: "red" }}>
        <i
          className={
            meal.favourite ? "fa-solid fa-heart" : "fa-regular fa-heart"
          }
          onClick={() => onFavoriteClick(meal._id)}
        />
      </div>

      <Card.Body>
        <Card.Title className="mb-3 d-flex align-items-baseline justify-content-between">
          <span className="fs-4">{meal.title}</span>
          <span className="me-2 text-muted fs-6 ">
            {FormateCurrency(meal.price)}
          </span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => increaseCartQuantity(meal)}
            >
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
                <Button onClick={() => decreaseCartQuantity(meal)}>-</Button>
                <span className="fs-4"> {quantity} in cart </span>
                <Button onClick={() => increaseCartQuantity(meal)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItemFromCart(meal)}
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

export default FlashDealCard;
