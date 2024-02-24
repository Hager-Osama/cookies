
import axios from "axios";
import {useEffect, useState } from "react"
import WishlistItem from "./wishlist.component";
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
        <WishlistItem key={item._id} item={item} addToWishlist={addToWishlist} wishlistItems={wishlistItems} />
      ))}
    </>
  );
};

export default Wishlist_data;
