import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import FormateCurrency from "./formateCurrency";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import AuthLocalUtils from "../../pages/local_utils";
import { toast } from "react-toastify";
import { useFlashDealsProvider } from "../flashDeals/FlashDealsData";
const FlashDealCard = ({ meal, onFavoriteClick }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const isUserLoggedIn = AuthLocalUtils.isLoggedIn();
  const quantity = getItemQuantity(meal) || 0;
  const navigate = useNavigate();
  const {fetchData} = useFlashDealsProvider();
  return (
    <Card className="h-100">
      <Card.Img
        src={meal.image?.url}
        variant="top"
        style={{ height: "250px", objectFit: "cover" }}
      />

      <div className="favourite" style={{ color: "red" }}>
        <i
          className={
            meal.favourite ? "fa-solid fa-heart" : "fa-regular fa-heart"
          }
          onClick={() => {
            if (!isUserLoggedIn) {
              fetchData();
              toast.error("Please login to add item to wishlist");
              navigate("/login");
            } else {
              onFavoriteClick(meal._id);
            }
          }}
        />
      </div>
      <Card.Body>
        <Card.Title className="mb-3 d-flex align-items-baseline justify-content-between">
          <span className="fs-4">{meal.title}</span>
          <span className="me-2 text-muted fs-6 ">
            {FormateCurrency(meal.price)}
          </span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => {
                if (!isUserLoggedIn) {
                  toast.error("Please login to add item to cart");
                  navigate("/login");
                } else {
                  increaseCartQuantity(meal);
                }
              }}
            >
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(meal)}>-</Button>
                <span className="fs-4"> {quantity} in cart </span>
                <Button onClick={() => increaseCartQuantity(meal)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItemFromCart(meal)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default FlashDealCard;
