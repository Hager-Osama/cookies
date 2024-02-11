import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [data,setData]=useState([]);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitForm = async (e) => {
    setLoadingSubmit(true);
    e.preventDefault();
    try {
      const formDataUpload = new FormData();
      formDataUpload.append("userName", formData.userName);
      formDataUpload.append("email", formData.email);
      formDataUpload.append("password", formData.password);
      formDataUpload.append("confirmPassword", formData.confirmPassword);

      const response = await axios.post(
        "https://restaurant-project-drab.vercel.app/auth/register",
        formDataUpload
      );

      setData([...data, response.data.result]);

      toast.success("Card created successfully!"); // Show success toast message
    } catch (error) {
      console.error("Error posting data:", error);
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
                onChange={handleInputChange}
                value={formData.userName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleInputChange}
                value={formData.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleInputChange}
                value={formData.password}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={handleInputChange}
                value={formData.confirmPassword}
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loadingSubmit}>
              {loadingSubmit? 'submiting...':'submit'}
              Register your Account
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
