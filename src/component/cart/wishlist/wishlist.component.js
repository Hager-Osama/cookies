import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FormateCurrency from "../../flashDeals/formateCurrency";
const Wishlist = ({ imgUrl, name, price, id }) => {
  
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title  className="mb-3 d-flex align-items-baseline justify-content-between">
          <span className="fs-4">{name}</span>
          <span className="me-2 text-muted fs-6 ">
            {FormateCurrency(price)}
          </span>
        </Card.Title >
        <div style={{color: "red" }}>
        <i className={isItemInWishlist(id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}  />

        </div>
        <Button variant="primary">View Item</Button>
      </Card.Body>
    </Card>
  );
};
export default Wishlist;
