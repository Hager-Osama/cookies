import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <Container style={{ marginTop: "30px", width: "30%" }}>
      <Row>
        <Col>
          <Form>
            <h2 style={{ textAlign: "center" }}>Sign In</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>

            <Form.Group className="mt-2">
              <Form.Label>
                Don't have an account?{" "}
                <Link to="/register" style={{ textDecoration: "none" }}>
                  {" "}
                  <span style={{ cursor: "pointer" }} className="text-danger">
                    register
                  </span>
                </Link>
              </Form.Label>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
