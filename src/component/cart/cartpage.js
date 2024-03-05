import React from "react";
import Cartpagecomponent from './cartpagecomponent'
import { useShoppingCart } from "../context/shoppingCartContext";

const Cartpage = () => {
  const {
    cartQuantity,
    cartItems,

    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();

  return (
    <>
      {" "}
      {cartItems.map((item) => (
        <Cartpagecomponent
          key={item.mealId._id}
          item={item}
          increaseCartQuantity={increaseCartQuantity}
          decreaseCartQuantity={decreaseCartQuantity}
          cartQuantity={cartQuantity}
         
        />
      ))}{" "}
    </>
  );
};

export default Cartpage;
