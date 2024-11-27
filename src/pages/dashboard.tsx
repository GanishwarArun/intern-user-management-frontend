// src/pages/dashboard.tsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"; // Optional: You can use Bootstrap for styling

const Dashboard = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header>Welcome to your Dashboard</Card.Header>
            <Card.Body>
              <Card.Title>User Info</Card.Title>
              <Card.Text>
                Here you can view and manage your account settings, profile, and
                more.
              </Card.Text>
              <Button variant="primary">Go to Settings</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
