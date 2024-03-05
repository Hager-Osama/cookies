import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCart from "../cart/shoppingCart";
import axios from "axios";
import AuthLocalUtils from "../../pages/local_utils";

const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const isUserLoggedIn = AuthLocalUtils.isLoggedIn();
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
      computeCartQuantity(response.data.data.cart.meals);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };
  useEffect(() => {
    if (!isUserLoggedIn) return;
    fetchCartData();
  }, []);

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };

  const getItemQuantity = (meal) => {
    return cartItems.length > 0
      ? cartItems.find((item) => item.mealId._id === meal._id)?.quantity
      : 0;
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
        const updatedCartItems = [...cartItems];
        setCartItems(updatedCartItems);
        computeCartQuantity(updatedCartItems);
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
      computeCartQuantity(updatedCartItems);
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
      const updatedCartItems = [
        ...cartItems.filter((item) => item.mealId._id !== meal._id),
      ];
      setCartItems(updatedCartItems);
      computeCartQuantity(updatedCartItems);
    } catch (error) {
      console.error("Error removing item from cart:", error.data.message);
    }
  };

  const clearCartFromMemory = () => {
    setCartItems([]);
    setCartQuantity(0);
  };
  const clearCart = async () => {
    try {
      const response = await axios.patch(
        "https://restaurant-project-drab.vercel.app/cart/clear",
        {},
        {
          headers: {
            token: AuthLocalUtils.getToken(),
          },
        }
      );
      setCartItems([]);
      setCartQuantity(0);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const computeCartQuantity = (cartItems) => {
    let quantity = 0;
    cartItems.forEach((item) => {
      quantity += item.quantity;
    });
    setCartQuantity(quantity);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        fetchCartData,
        cartItems,
        removeItemFromCart,
        decreaseCartQuantity,
        getItemQuantity,
        increaseCartQuantity,
        closeCart,
        openCart,
        cartQuantity,
        clearCart,
        clearCartFromMemory,
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
