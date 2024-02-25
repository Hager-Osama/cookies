import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCart from "../cart/shoppingCart";
import axios from "axios";
import AuthLocalUtils from "../../pages/local_utils";

const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  /*get */
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(
          "https://restaurant-project-drab.vercel.app/cart",
          {
            headers: {
              token: AuthLocalUtils.getToken(),
            },
          }
        );
        setCartItems(response.data.data.cart.meals);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    fetchCartData();
  }, []);

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };

  const getItemQuantity = (meal) => {
    return cartItems.length > 0 ? 1 : 0;
  };

  //add to cart function
  const increaseCartQuantity = async (meal, quantity = 1) => {
    try {
      const response = await axios.post(
        "https://restaurant-project-drab.vercel.app/cart",
        {
          mealId: meal._id,
          quantity,
        },
        {
          headers: {
            token: AuthLocalUtils.getToken(),
          },
        }
      );
      if (response.data.success) {
        // get the index of the item that fulfills the condition
        const index = cartItems.findIndex(
          (item) => meal._id === item.mealId._id
        );
        if (index === -1) {
          cartItems.push({ mealId: meal, quantity: quantity });
        } else {
          cartItems[index].quantity += quantity;
        }
        setCartItems([...cartItems]);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  //decrese from cart
  const decreaseCartQuantity = async (meal) => {
    const id = meal._id;
    const mealQuantity = getItemQuantity(meal);
    const newQuantity = mealQuantity - 1;
    if (mealQuantity == 1) {
      await removeItemFromCart(meal);
      return;
    }

    try {
      const response = await axios.patch(
        "https://restaurant-project-drab.vercel.app/cart",
        {
          mealId: id,
          quantity: newQuantity,
        },
        {
          headers: {
            token: AuthLocalUtils.getToken(),
          },
        }
      );
      const updatedCartItems = cartItems.map((item) => {
        if (item.mealId._id === id) {
          item.quantity = newQuantity;
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error decreasing item quantity:", error);
    }
  };
  //remove form cart
  const removeItemFromCart = async (meal) => {
    try {
      const response = await axios.patch(
        `https://restaurant-project-drab.vercel.app/cart/${meal._id}`,
        {},
        {
          headers: {
            token: AuthLocalUtils.getToken(),
          },
        }
      );
      setCartItems([
        ...cartItems.filter((item) => item.mealId._id !== meal._id),
      ]);
    } catch (error) {
      console.error("Error removing item from cart:", error.data.message);
    }
  };

  const cartQuantity =
    cartItems.length > 0
      ? cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
      : 0;

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        removeItemFromCart,
        decreaseCartQuantity,
        getItemQuantity,
        increaseCartQuantity,
        closeCart,
        openCart,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
export const useShoppingCart = (id) => {
  return useContext(ShoppingCartContext);
};
