import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.css";
import axiosInstance from "../../../api/API";

const Resetpassword = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const submitForm = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Both Password and Confirm Password are required.");
      return;
    }
    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      toast.error("Passwords do not match.");
      return;
    }
    // Reset password match error state
    setPasswordMatchError(false);

    try {
      if (loadingSubmit) return;
      setLoadingSubmit(true);
      const response = await axiosInstance.patch(
        "/auth/resetPassword",
        { password, confirmPassword },
        {
          headers: {
            token: localStorage.getItem("resetToken"),
          },
        }
      );
      const { success, message } = response.data;
      if (success) {
        toast.success(message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.msgError);
    }
    setLoadingSubmit(false);
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
                        <i className="fa-regular fa-eye"></i>
                      ) : (
                        <i className="fa-regular fa-eye-slash"></i>
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
