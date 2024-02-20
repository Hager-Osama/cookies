import React from "react";
import { Button, Stack } from "react-bootstrap";
import FlashDeals from "../flashDeals/FlashDealsDesgin";
import FlashDealsData from "../flashDeals/FlashDealsData";
import FormateCurrency from "../flashDeals/formateCurrency";
import { useShoppingCart } from "../context/shoppingCartContext";

const CartItem = ({ item }) => {
  const { removeItemFromCart } = useShoppingCart();

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {item.quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x {item.quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {" "}
          {FormateCurrency(item.price)}
        </div>
      </div>
      <div>{FormateCurrency(item.price * item.quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => {
          removeItemFromCart(item.id);
        }}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
