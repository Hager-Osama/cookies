/*import { useState } from "react";
 const [wishlistItems, setWishlistItems] = useState([]); // Initialize wishlist state

  useEffect(() => {
   const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
   setWishlistItems(storedWishlist);
 }, []);

 const handleAddToWishlist = () => {
    addToWishlist(id);
    setWishlistItems([...wishlistItems, { id }]); // Add item to local state
    localStorage.setItem('wishlist', JSON.stringify([...wishlistItems, { id }])); // Update local storage
};

const handleRemoveFromWishlist = () => {
    removeFromWishlist(id);
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems.filter((item) => item.id !== id)));
};*/
import axios from "axios";
import {useEffect, useState } from "react"
import Wishlist from "./wishlist.component";
import AuthLocalUtils from "../../pages/local_utils";
const Wishlist_data = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const getFavouriteItem = async () => {
      try {
        const response = await axios.get(
          "https://restaurant-project-drab.vercel.app/meal/wishlist",
          {
            headers: {
              token: AuthLocalUtils.getToken(),
            },
          }
        );
        setWishlistItems(response.data.data);
      } catch (error) {
        console.error("Error fetching Wishlist data:", error);
      }
    };
    return getFavouriteItem();
  }, []);
  //add or delete card to wishlist function
  const addToWishlist = async (itemId) => {
    try {
      const response = await axios.put(
        "https://restaurant-project-drab.vercel.app/meal/redHeart",
        { _id: itemId },
        {
          headers: {
            token: AuthLocalUtils.getToken(),
          },
        }
      );
      setWishlistItems(response.data.data);
    } catch (error) {
      console.error("Error add to Wishlist ", error);
    }
  };
  return (
    <>
      {wishlistItems.map((item) => (
        <Wishlist key={item._id} item={item} addToWishlist={addToWishlist} wishlistItems={wishlistItems} />
      ))}
    </>
  );
};

export default Wishlist_data;
