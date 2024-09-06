import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // for navigation
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 0 && password === confirmPassword ;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const userData = {
      email: email,
      password: password
    };

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(userData));

    alert("Registration successful! You can now log in.");
    navigate("/login"); 
  }

  return (
    <div className="Register">
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

        <Form.Group size="lg" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="d-block w-100" size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form>
    </div>
  );
}
