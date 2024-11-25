import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useRouter } from "next/router";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleRegister = async () => {
    console.log("Registering user with:", { name, email, password });

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/create`,
        {
          name,
          email,
          password,
        }
      );

      if (res.status === 201) {
        console.log(res.data.message);
        toast.success(res.data.message);
        router.push("/login"); // Navigate to login page after successful registration
      }
    } catch (error: any) {
      console.error("Error during registration:", error.response);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "22rem" }} className="p-4 shadow-sm">
        <h2 className="text-center mb-4">Register</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              autoComplete="current-password"
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </Form.Group>

          <Button variant="primary" onClick={handleRegister} className="w-100">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Register;
