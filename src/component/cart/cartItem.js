import React from "react";
import { Button, Stack } from "react-bootstrap";
import FlashDeals from "../flashDeals/FlashDealsDesgin";
import FlashDealsData from "../flashDeals/FlashDealsData";
import FormateCurrency from "../flashDeals/formateCurrency";
import { useShoppingCart } from "../context/shoppingCartContext";

const CartItem = ({ id, quantity }) => {
  const { removeItemFromCart } = useShoppingCart();
  const item = FlashDeals.find((i) => i.id === id);
  console.log(item);
  if (item == null) return null;
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
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x {quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {" "}
          {FormateCurrency(item.price)}
        </div>
      </div>
      <div>{FormateCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => {
          removeItemFromCart(id);
        }}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
