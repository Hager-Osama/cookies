import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import CartItem from "./cartItem";

const ShoppingCart = () => {
  const { cartItems } = useShoppingCart();
  return (
    <Offcanvas show={true}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            imgUrl={item.image.url}
            price={item.price}
            name={item.title}
          />
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
