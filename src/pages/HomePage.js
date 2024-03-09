import NavBar from "../component/navbar/NavBar";
import React from "react";
import Header1 from "../component/header";
import "../index.css";
import IconSectionData from "../component/icons/iconSectionData";
import ReactCardDate from "../component/card/ReactCardDate";
import SearchFoodDate from "../component/SearchbyFood/SearchFoodDate";
import Design from "../component/design/Design";
import Installation from "../component/InstallApp/installation";
import DetailsCardData from "../component/Details Card/DetailsCardData";
import Last from "../component/last/last";
import Footer from "../component/Footer/Footer";
import SecondFooter from "../component/Footer/SecondFooter";
import { MealsList } from "../component/flashDeals/FlashDealsData";
import { useShoppingCart } from "../component/context/shoppingCartContext";
const HomePage = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div>
      <button className="float-btn" onClick={openCart}>
        <i className="fa-solid fa-bag-shopping"></i>
        <div
                className="rounded-circle bg-success d-flex justify-content-center align-items-center;"
                style={{
                  position: "absolute",
                  color: "white",
                  width: "1.25rem",
                  height: "1.25rem",
                  transform: "translate(25%, 25%)",
                  bottom: 3,
                  right: 4,
                  alignItems: "center",
                }}
              >
                {cartQuantity}
              </div>
      </button>
      <NavBar />
      <Header1 />
      <MealsList />
      <IconSectionData />
      <ReactCardDate />
      <SearchFoodDate />
      <Design />
      <Installation />
      <DetailsCardData />
      <Last />
      <Footer />
      <SecondFooter />
    </div>
  );
};

export default HomePage;
