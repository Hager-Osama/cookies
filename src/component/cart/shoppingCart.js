import React, { useState, useEffect } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import CartItem from "./cartItem";
import FormateCurrency from "../flashDeals/formateCurrency";

const ShoppingCart = ({ isOpen }) => {
  const { cartItems, closeCart } = useShoppingCart();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (sum, item) => sum + item.mealId.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.mealId._id} item={item} />
          ))}
          <div style={{ fontWeight: "bold", textAlign: "right" }}>
            {" "}
            Total : {FormateCurrency(totalPrice)}{" "}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
