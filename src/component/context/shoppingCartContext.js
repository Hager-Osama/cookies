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
    return cartItems.length > 0
      ? cartItems.find((item) => item.id === meal._id)?.quantity || 0
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
        setCartItems([...cartItems]);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  //decrese from cart
  const decreaseCartQuantity = async (meal) => {
    const id = meal._id;
    if (getItemQuantity(id) > 1) {
      try {
        const response = await axios.patch(
          "https://restaurant-project-drab.vercel.app/cart",
          {
            mealId: id,
            quantity: -1,
          },
          {
            headers: {
              token: AuthLocalUtils.getToken(),
            },
          }
        );
        if (response.data.success) {
          const updatedCartItems = cartItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: response.data.updatedQuantity };
            }
            return item;
          });
          setCartItems(updatedCartItems);
        } else {
          console.error("API error:", response.data.error);
        }
      } catch (error) {
        console.error("Error decreasing item quantity:", error);
      }
    }
  };
  //remove form cart
  const removeItemFromCart = async (meal) => {
    const id = meal._id;
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
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
