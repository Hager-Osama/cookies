import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./checkout.css";
import { useNavigate } from "react-router-dom";
const CheckoutPage = () => {
  const [isPickupSelected, setIsPickupSelected] = useState(false);

  const handleDeliveryChange = () => setIsPickupSelected(false);
  const handlePickupChange = () => setIsPickupSelected(true);

  const navigate = useNavigate();
  const handleAddItemsClick = () => {
    navigate("/");
  };
  return (
    <Container>
      <section className="checkout-header">
        <Form className="checkout-form">
          <h5>CONTACT INFO.</h5>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="tel" name="phone" required />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Second Phone no. (optional)</Form.Label>
              <Form.Control type="tel" name="phone2" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Full name</Form.Label> 
              <Form.Control type="text" name="name" required/>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" name="email" pattern="[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}" required />
            </Form.Group>
          </Row>
          {isPickupSelected ? null : ( // Hide when pickup is selected
          <><h5>LOCATION</h5><Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city" />
            </Form.Group><Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Area</Form.Label>
                  <Form.Control type="text" name="area" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Street name/number</Form.Label>
                  <Form.Control type="text" name="street" />
                </Form.Group>
              </Row><Form.Group>
                <Form.Label>Building name/number</Form.Label>
                <Form.Control type="text" name="building"  />
              </Form.Group><Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Floor</Form.Label>
                  <Form.Control type="text" name="floor" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Apartment</Form.Label>
                  <Form.Control type="text" name="apartment" />
                </Form.Group>
              </Row></> )}
          <h5> SCHEDULE YOUR ORDER </h5>
          <div className=" text-center mb-3">
            <p className="text-muted">
              Get your order when you want it, hassle-free.
            </p>
            <Form.Check inline label="Order Now" name="group1" type="radio" />
            <Form.Check inline label="Order Later" name="group1" type="radio" />
          </div>
        </Form>
        <section className="checkout-payment">
          <div className=" mb-3">
            <h6>Choose Your Preferred Option:</h6>
            <div className="box">
              <Form.Check
                label="Delivery"
                name="group2"
                type="radio"
                onChange={handleDeliveryChange}
              />
            </div>
            <div className="box">
              <Form.Check
                label="Pick up"
                name="group2"
                type="radio"
                onChange={handlePickupChange}
              />
            </div>
          </div>
          
          <div className=" mb-3">
            <h6>Choose Your Payment Method:</h6>
            <span className="text-muted">
              You have the option to pay with either cash or a credit/debit
              card.
            </span>
            <div className="box">
              <Form.Check label="Cash" name="group3" type="radio" />
            </div>
            <div className="box">
              <Form.Check
                label="Credit/Debit Card"
                name="group3"
                type="radio"
              />
            </div>
          </div>

          <div className="d-grid gap-2">
            <Button variant="outline-primary" onClick={handleAddItemsClick}>
              + ADD MORE ITEMS
            </Button>
            <Button variant="primary">PLACE ORDER</Button>
          </div>
        </section>
      </section>
    </Container>
  );
};

export default CheckoutPage;
