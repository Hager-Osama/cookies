import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FormateCurrency from "../../component/flashDeals/formateCurrency";
const WishlistItem = ({ item, addToWishlist }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image.url} />
      <Card.Body>
        <Card.Title className="mb-3 d-flex align-items-baseline justify-content-between">
          <span className="fs-4">{item.title}</span>
          <span className="me-2 text-muted fs-6 ">
            {FormateCurrency(item.price)}
          </span>
        </Card.Title>
        <div style={{ color: "red" }}>
          <i
            className={"fa-solid fa-heart"}
            onClick={() => addToWishlist(item._id)}
          />
        </div>

        <Button variant="primary">View Item</Button>
      </Card.Body>
    </Card>
  );
};
export default WishlistItem;
