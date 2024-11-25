import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { Card, Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import toast from "react-hot-toast";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();
  const { token } = router.query; // Get token from the URL

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/reset-password/${token}`,
        { password, confirmPassword }
      );
      if (res.status === 200) {
        toast.success("Password reset successful");
        router.push("/login"); // Redirect to login page after successful reset
      }
    } catch (error: any) {
      console.error(error);
      toast.error("Error resetting password");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "22rem" }} className="p-4 shadow-sm">
        <h2 className="text-center mb-4">Reset Password</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm new password"
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={handleResetPassword}
            className="w-100"
          >
            Reset Password
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ResetPassword;
