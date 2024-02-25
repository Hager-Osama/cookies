import axios from "axios";
import { useEffect, useState } from "react";
import WishlistItem from "./wishlist.component";
import AuthLocalUtils from "../../pages/local_utils";
import { useFlashDealsProvider } from "../flashDeals/FlashDealsData";
const WishlistData = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { fetchData } = useFlashDealsProvider();
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
        console.log("wishlistItems", response.data.data);
      } catch (error) {
        console.error("Error fetching Wishlist data:", error);
      }
    };
    getFavouriteItem();
  }, []);

  //add card to wishlist function
  const addRemoveFromWishList = async (itemId) => {
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

      if (response.data.data.favourite) {
        setWishlistItems([...wishlistItems, response.data.data]);
      } else {
        const index = wishlistItems.findIndex(
          (item) => item._id === response.data.data._id
        );
        if (index !== -1) {
          wishlistItems.splice(index, 1);
          setWishlistItems([...wishlistItems]);
        }
        fetchData();
      }
    } catch (error) {
      console.error("Error add to Wishlist ", error);
    }
  };
  return (
    <div className="d-flex flex-wrap justify-content-evenly container mt-5 ">
      {wishlistItems.map((item, index) => (
        <WishlistItem
          key={`${item._id}+${index}`}
          item={item}
          addRemoveFromWishList={addRemoveFromWishList}
          wishlistItems={wishlistItems}
        />
      ))}
    </div>
  );
};

export default WishlistData;
