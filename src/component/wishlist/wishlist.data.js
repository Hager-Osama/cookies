import axios from "axios";
import { useEffect, useState } from "react";
import WishlistItem from "./wishlist.component";
import AuthLocalUtils from "../../pages/local_utils";
const WishlistData = () => {
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
    getFavouriteItem();
  }, []);
  //add or delete card to wishlist function
  const addToWishlist = async (itemId) => {
    try {
      const response = await axios.put(
        `https://restaurant-project-drab.vercel.app/meal/redHeart/${itemId}`,
        {},
        {
          headers: {
            token: AuthLocalUtils.getToken(),
          },
        }
      );
      setWishlistItems(
        wishlistItems.filter((meal) => {
          return meal._id !== itemId;
        })
      );
    } catch (error) {
      console.error("Error add to Wishlist ", error);
    }
  };
  return (
    <>
      {wishlistItems.map((item, index) => (
        <WishlistItem
          key={`${item._id}+${index}`}
          item={item}
          addToWishlist={addToWishlist}
          wishlistItems={wishlistItems}
        />
      ))}
    </>
  );
};

export default WishlistData;
