import React, { useState, FormEvent } from "react";
import { useRouter } from "next/router"; // Next.js router
import axios from "axios";
import { Form, Button, Card, Container } from "react-bootstrap";
import toast from "react-hot-toast";
// import { API_URL } from "../../utils/config"; // Use your config for API_URL

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter(); // Next.js router hook

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Log API URL for debugging purposes
    //   console.log("API URL:", API_URL);

       const res = await axios.post(
         `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
         {
           email,
           password,
         }
       );

      if (res.status === 200) {
        console.log(res.data.message);
        toast.success(res.data.message);
        router.push("/dashboard"); // Use Next.js router for page navigation
      }
    } catch (error: any) {
      // Enhanced error handling with default error message
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "22rem" }} className="p-4 shadow-sm">
        <h2 className="text-center mb-4">Log In</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              autoComplete="current-password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>

          <div className="text-center mt-3">
            <Button
              variant="link"
              href="/user/forgot-password"
              className="text-decoration-none"
            >
              Forgot Password?
            </Button>
          </div>
          <div className="text-center mt-3">
            <Button
              variant="link"
              href="/user/create"
              className="text-decoration-none"
            >
              Register?
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
