import React, { useEffect, useState, useContext, createContext } from "react";
import FlashDealCard from "./FlashDealsDesgin";
import AuthLocalUtils from "../../pages/local_utils";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../api/API";
const MealContext = createContext({});

const MealsList = () => {
  const { isLoading, flashDealsData, fetchData, addToWishlist } =
    useFlashDealsProvider();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-evenly container mt-5  ">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        flashDealsData.map((meal) => (
          <FlashDealCard
            key={meal._id}
            meal={meal}
            onFavoriteClick={addToWishlist}
          />
        ))
      )}
    </div>
  );
};

const FlashDealsProvider = ({ children }) => {
  const [flashDealsData, setFlashDealsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        "https://restaurant-project-drab.vercel.app/meal/getallMeal",
        {},
        {
          headers: {
            token: AuthLocalUtils.getToken(),
          },
        }
      );
      setFlashDealsData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToWishlist = async (itemId) => {
    try {
      await axiosInstance.put(
        `https://restaurant-project-drab.vercel.app/meal/redHeart/${itemId}`
      );
      fetchData();
    } catch (error) {
      console.error("Error add to Wishlist ", error);
    }
  };

  return (
    <MealContext.Provider
      value={{
        loading,
        flashDealsData,
        addToWishlist,
        fetchData,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};
export const useFlashDealsProvider = () => {
  return useContext(MealContext);
};
export default FlashDealsProvider;
export { MealsList };
