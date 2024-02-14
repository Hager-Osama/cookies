import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Forgotpassword = () => {
    const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");




  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.patch("https://restaurant-project-drab.vercel.app/auth/forgetCode", {
          email: email,
        });
  
        const { success, message, data } = response.data;
  
        if (success) {
          const resetToken = data.token;
  
          // Now you can navigate the user to a new page to reset the password
          // Example: window.location.href = `/reset-password?token=${resetToken}`;
          navigate('/Resetpassword')
          // Update the message state to display a success message
          setMessage(message);
        } else {
          // Update the message state to display an error message
          setMessage(message);
        }
      } catch (error) {
        console.error("Error submitting email:", error);
        // Update the message state to display an error message
        setMessage("An error occurred while submitting your email. Please try again.");
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
