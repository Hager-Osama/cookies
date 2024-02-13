import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../login/style.css";
const RegisterPage = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const handleSubmitForm = async (e) => {
    setLoadingSubmit(true);
    e.preventDefault();
    let regobj = { userName, email, password, confirmPassword };
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      setLoadingSubmit(false);
      return;
    }
    // Reset password match error state
    setPasswordMatchError(false);
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
    <div className="bg">
    <Container>
      <Row>
        <Col>
          <div className="box">
            <Form onSubmit={handleSubmitForm}>
              <h2 style={{ textAlign: "center" }}>Sign Up</h2>
              <Form.Group className="mb-3" controlId="formBasicUserName">
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
                  autoComplete="off"
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
                <div className="password-input-container">
                  <Form.Control
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div
                    className="password-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i className="fa-regular fa-eye-slash"></i>
                    ) : (
                      <i className="fa-regular fa-eye"></i>
                    )}
                  </div>
                </div>
               
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <div className="password-input-container">
                  <Form.Control
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    required
                  />
                  <div
                    className="password-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i className="fa-regular fa-eye-slash"></i>
                    ) : (
                      <i className="fa-regular fa-eye"></i>
                    )}
                  </div>
                </div>
                {passwordMatchError && (
                  <Form.Text className="text-danger">
                    Passwords do not match.
                  </Form.Text>
                )}
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
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default RegisterPage;
