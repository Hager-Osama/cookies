import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.css";
import AuthLocalUtils from "../../local_utils";
import axiosInstance from "../../../api/API";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    // Check if there is a token in localStorage, if so, navigate to Home
    const token = localStorage.getItem("token");
    if (token) {
    }
  }, [navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axiosInstance.post("/auth/login", {
          email,
          password,
        });
        // Handle the response
        const { success } = response.data;
        if (success) {
          toast.success(" Login successfully!");
          AuthLocalUtils.saveLoginData(response.data.data);
          navigate("/");
        }
      } catch (error) {
        console.error("Login failed:", error.message);
        toast.error("Login failed" + error.response.data.msgError);
      }
    }
  };
  const validate = () => {
    let result = true;
    if (!email & !password) {
      result = false;
      toast.warning("Please enter both email and password");
    }
    return result;
  };

  return (
    <div className="bg">
      <Container>
        <Row>
          <Col>
            <div className="box">
              <Form onSubmit={handleLogin}>
                <h2 style={{ textAlign: "center" }}>Sign In</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Remember Me"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Form.Group className="mt-2">
                  <Form.Label>
                    <Link
                      to="/forgotpassword"
                      style={{ textDecoration: "none" }}
                    >
                      <span
                        style={{ cursor: "pointer" }}
                        className="text-primary"
                      >
                        forget password ?!
                      </span>
                    </Link>
                  </Form.Label>
                </Form.Group>
                <Form.Group className="mt-1">
                  <Form.Label>
                    Don't have an account?{" "}
                    <Link to="/register" style={{ textDecoration: "none" }}>
                      {" "}
                      <span
                        style={{ cursor: "pointer" }}
                        className="text-danger"
                      >
                        register
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

export default LoginPage;
