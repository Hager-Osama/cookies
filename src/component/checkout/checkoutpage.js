import React from "react";
import { Form, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./checkout.css";
const CheckoutPage = () => {
  return (
    <Container>
      <Form>
        <h4>CONTACT INFO.</h4>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="Number" name="phone" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Second Phone no. (optional)</Form.Label>
            <Form.Control type="Number" name="phone2" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label >Full name</Form.Label>
          <Form.Control type="text" name="name" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" name="email" />
        </Form.Group>
</Row>
        <h4>LOCATION</h4>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="city" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Area</Form.Label>
          <Form.Control type="text" name="area" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Street name/number</Form.Label>
          <Form.Control type="text" name="street" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Building name/number</Form.Label>
          <Form.Control type="text" name="building" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Floor</Form.Label>
          <Form.Control type="text" name="floor" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Apartment</Form.Label>
          <Form.Control type="text" name="apartment" />
        </Form.Group>

        <h4> SCHEDULE YOUR ORDER </h4>
        <p>Get your order when you want it, hassle-free.</p>
        <div className=" mb-3">
          <Form.Check inline label="Order Now" name="group1" type="radio" />
          <Form.Check inline label="Order Later" name="group1" type="radio" />
        </div>
      </Form>
    </Container>
  );
};

export default CheckoutPage;
