import React from "react";
import { Stack } from "react-bootstrap";
import FlashDeals from "../flashDeals/FlashDealsDesgin";

const CartItem = ({ id, quantity }) => {
    const item=FlashDeals.find((i)=>i.id === id)
    if (item==null)return null;
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center"
    >
        <img src={item.imgUrl} alt="cart-img" style={{width:"125px", height:"75px", objectFit:"cover"}}/>
    </Stack>
  );
};

export default CartItem;
