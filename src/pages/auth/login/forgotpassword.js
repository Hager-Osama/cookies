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
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVerifiyingCode, setIsVerifiyingCode] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true); // Set loading to true when the form is submitted
    try {
      const response = await axiosInstance.patch("/auth/sendVerifyCode", {
        email: email,
      });

      const { success, data, message } = response.data;
      console.log("Success:", success);
      console.log("Data:", data);
      if (success) {
        setVerificationCodeSent(true);
        setMessage(message);
        localStorage.setItem("resetToken", data.token);
        toast.success(message);
      }
    } catch (error) {
      setMessage(error.response.data.msgError);
      toast.error(error.response.data.msgError);
    } finally {
      setLoading(false); // Set loading back to false after the API request is completed
    }
  };

  const handleVerificationCodeEntered = async () => {
    if (loading) return;
    setLoading(true);
    if (isVerifiyingCode) return;
    setIsVerifiyingCode(true);
    try {
      // Send the entered verification code to the server for validation
      const response = await axiosInstance.patch(
        "/auth/VerifyCode",
        {
          forgetCode: verificationCode,
        },
        {
          headers: {
            token: localStorage.getItem("resetToken"),
          },
        }
      );

      const { success } = response.data;
      if (success) {
        navigate("/resetpassword");
      }
    } catch (error) {
      setMessage(error.response.data.msgError);
      toast.error(error.response.data.msgError);
    } finally {
      setIsVerifiyingCode(false);
      setLoading(false);
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
                  {loading ? "Sending..." : "Submit"}
                </Button>
                {verificationCodeSent && (
                  <>
                    <p>
                      Verification code sent. Check your email and enter the
                      code below:
                    </p>

                    <Form.Control
                      type="text"
                      placeholder="Enter verification code"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                    />
                    <br />
                    <Button
                      variant="primary"
                      onClick={handleVerificationCodeEntered}
                    > 
                      Verify Code
                    </Button>
                  </>
                )}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Forgotpassword;
