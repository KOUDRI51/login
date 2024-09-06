import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Get the user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the email and password match the stored user details
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      navigate("/");  
    } else {
      setErrorMessage("Invalid email or password");
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="d-block w-100" size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        
        {errorMessage && <div className="error">{errorMessage}</div>} 

        <div className="text-center mt-3">
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
      </Form>
    </div>
  );
}
