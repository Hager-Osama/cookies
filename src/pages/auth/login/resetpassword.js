import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./style.css";
import axiosInstance from "../../../api/API";

const Resetpassword = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const location = useLocation();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      console.log("asdasdasd")
      if (loadingSubmit) return;
      setLoadingSubmit(true);
      const response = await axiosInstance.patch(
        "/auth/resetPassword",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            token: location.state.token,
          },
        }
      );
      const { success, message } = response.data;
      if (success) {
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (e) {
      toast.error(e.data.msgError);
    }
    setLoadingSubmit(false);
  };

  const passwordChanged = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordChanged = (e) => {
    setConfirmPassword(e.target.value);
  };
  const checkPasswordsMatch = () => {
    setPasswordMatchError(password !== confirmPassword);
  };
  return (
    <div className="bg">
      <Container>
        <Row>
          <Col>
            <Form onSubmit={submitForm}>
              <div className="box">
                <h2 style={{ textAlign: "center" }}>Reset Password</h2>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <div className="password-input-container">
                    <Form.Control
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      type={showPassword ? "text" : "password"}
                      placeholder="New password"
                      value={password}
                      onChange={passwordChanged}
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

                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <div className="password-input-container">
                    <Form.Control
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      onChange={confirmPasswordChanged}
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

                <Button
                  variant="primary"
                  type="submit"
                  disabled={loadingSubmit}
                >
                  {loadingSubmit
                    ? " Reseting the password..."
                    : " Reset password"}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resetpassword;
