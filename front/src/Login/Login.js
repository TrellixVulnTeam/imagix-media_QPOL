import React, { useState } from "react";
import { Navbar, Container, Form, Button, Col } from "react-bootstrap";
import logo from "../Assets/imagixlogo.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "react-axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // States and const variable
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // function for loggin in

  const login = (e) => {
    e.preventDefault();
    if (!username.length > 0 && !password > 0) {
      return toast.error("Please fill all fields", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      // Axios.post(, { username, password }).then((response) => {});
      navigate("/photos");
    }
  };

  return (
    <div className="container ">
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand className="text-light">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Imagix Media Logo"
            />
            Imagix Media
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Col xs={12} className="d-flex justify-content-center">
        <Form className="d-flex flex-column border border-primary rounded-4 justify-content-center mt-5 p-5">
          <h1>Login</h1>

          {/* Input for username */}
          <Form.Group className="mb-4">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
              placeholder="Username"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>

          {/* Input for password */}
          <Form.Group className="mb-4">
            <Form.Label>Enter a Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button className="mb-3" variant="primary" onClick={login}>
            Login
          </Button>
          <a href="">Forgot Password</a>
        </Form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Col>
    </div>
  );
};

export default Login;
