import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    setLoadingSubmit(true);
    e.preventDefault();
    let regobj = { userName, email, password, confirmPassword };

    // console.log(regobj);
    try {
      const response = await axios.post(
        "https://restaurant-project-drab.vercel.app/auth/register",
        regobj, // Pass regobj in the request body
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success(" Registered successfully!");
      navigate("/login");
      // Reset form after successful registration
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error Registered:", error.message);
      console.error("Error Details:", error.response.data.msgError);
      toast.error("Error Details: " + error.response.data.msgError);
    } finally {
      setLoadingSubmit(false);
    }
  };
  return (
    <Container style={{ marginTop: "30px", width: "30%" }}>
      <Row>
        <Col>
          <Form onSubmit={handleSubmitForm}>
            <h2 style={{ textAlign: "center" }}>Sign Up</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                pattern="[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}"
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loadingSubmit}>
              {loadingSubmit ? " Registering..." : " Register"}
            </Button>

            <Form.Group className="mt-2">
              <Form.Label>
                Do you have an account?{" "}
                <Link to="/login" style={{ textDecoration: "none" }}>
                  {" "}
                  <span style={{ cursor: "pointer" }} className="text-danger">
                    Login
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

export default RegisterPage;
