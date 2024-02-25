import React, { useEffect, useState, useContext, createContext } from "react";
import FlashDealCard from "./FlashDealsDesgin";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthLocalUtils from "../../pages/local_utils";
const MealContext = createContext({});

const FlashDealsProvider = ({ children }) => {
  const [flashDealsData, setFlashDealsData] = useState([]);
  const [loading, setLoading] = useState(true);

  /* const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    meal: null,
    offer: "",
    expired: "",
  });*/
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://restaurant-project-drab.vercel.app/meal/getallMeal",
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
      const response = await axios.put(
        `https://restaurant-project-drab.vercel.app/meal/redHeart/${itemId}`,
        {},
        {
          headers: {
            token: AuthLocalUtils.getToken(),
          },
        }
      );
      setFlashDealsData(
        flashDealsData.map((meal) => {
          if (meal._id === itemId) {
            return response.data.data;
          }
          return meal;
        })
      );
    } catch (error) {
      console.error("Error add to Wishlist ", error);
    }
  };

  const card = flashDealsData.map((meal) => (
    <FlashDealCard key={meal._id} meal={meal} onFavoriteClick={addToWishlist} />
  ));
  return (
    <MealContext.Provider
      value={{
        fetchData,
      }}
    >
      {children}
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-evenly container mt-5  ">
          {card}
        </div>
      )}
    </MealContext.Provider>
  );
};
export default FlashDealsProvider;
export const useFlashDealsProvider = () => {
  return useContext(MealContext);
};
