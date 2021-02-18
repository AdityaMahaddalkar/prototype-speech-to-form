import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function FormComponent() {
  return (
    <Container className="mt-5">
      <div>Welcome to forms</div>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="customEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  autoComplete={false}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="customPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  autoComplete={false}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="customAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  autoComplete={false}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="customPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default FormComponent;
