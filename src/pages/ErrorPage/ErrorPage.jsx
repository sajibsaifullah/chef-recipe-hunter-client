import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="text-center">
          <FaExclamationTriangle size={64} className="text-warning mb-3" />
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Link to='/'>
          <Button variant="primary">Go to Home Page</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
