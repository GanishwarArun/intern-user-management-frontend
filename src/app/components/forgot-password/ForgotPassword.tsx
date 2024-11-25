"use client";

import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import axios from "axios";
import toast from "react-hot-toast";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/forgot-password`,
        { email }
      );
      if (res.status === 200) {
        toast.success("Password reset email sent");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending email");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "22rem" }} className="p-4 shadow-sm">
        <h2 className="text-center mb-4">Forgot Password</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Send Reset Link
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ForgotPassword;
