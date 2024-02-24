import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FormateCurrency from "../../component/flashDeals/formateCurrency";
const WishlistItem = ({ item , addToWishlist ,wishlistItems}) => {
  const isItemInWishlist = (itemId) => {
    return wishlistItems.some((item) => item._id === itemId);
};
const handleAddToWishlist = () => {
  addToWishlist(item.mealId._id);
};
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.mealId.image.url} />
      <Card.Body>
        <Card.Title className="mb-3 d-flex align-items-baseline justify-content-between">
          <span className="fs-4">{item.mealId.title}</span>
          <span className="me-2 text-muted fs-6 ">
            {FormateCurrency(item.mealId.price)}
          </span>
        </Card.Title>
        <div style={{ color: "red" }}>
          <i
            className={
              isItemInWishlist(item.mealId._id)
                ? "fa-solid fa-heart"
                : "fa-regular fa-heart"
             }
             onClick={handleAddToWishlist}
          />
        </div>

        <Button variant="primary">View Item</Button>
      </Card.Body>
    </Card>
  );
};
export default WishlistItem;
