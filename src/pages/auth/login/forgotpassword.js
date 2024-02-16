import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/API";
import { toast } from "react-toastify";

const Forgotpassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.patch("/auth/forgetCode", {
        email: email,
      });

      const { success, data } = response.data;

      if (success) {
        const resetToken = data.token;

        navigate("/Resetpassword", {
          state: {
            token: resetToken,
          },
        });

      }
    } catch (error) {
      toast.error(error.response.data.msgError);
    }
  };

  return (
    <div className="bg">
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <div className="box">
                <h2 style={{ textAlign: "center" }}>Forgot Password</h2>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    pattern="[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                {message && <p>{message}</p>}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Forgotpassword;
