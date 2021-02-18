import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function FormComponent() {
  const [selectedId, setSelectedId] = React.useState(null);
  const [inputValue, setInputValue] = React.useState(null);
  const commands = [
    {
      command: "select :condition",
      callback: (condition) => {
        console.log(`Select ${condition}`);
        try {
          document.getElementById(`${condition}`).style.backgroundColor =
            "#fad698";
        } catch (e) {
          console.error(e);
        }

        for (let id of ids) {
          console.log(`${id}\t${condition}`);
          if (id !== condition && document.getElementById(id)) {
            console.log(`Resetting background of ${id}`);
            document.getElementById(`${id}`).style.backgroundColor =
              "transparent";
          }
        }
      },
    },
  ];

  const ids = ["email", "password", "address", "phone"];

  const transcripts = useSpeechRecognition({ commands });

  SpeechRecognition.startListening({ continuous: true });

  return (
    <Container className="mt-5">
      <div>Welcome to forms</div>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  id={ids[0]}
                  type="email"
                  placeholder="Enter email"
                  autoComplete={false}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  id={ids[1]}
                  type="password"
                  placeholder="Enter password"
                  autoComplete={false}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  id={ids[2]}
                  as="textarea"
                  rows={3}
                  autoComplete={false}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" id={ids[3]}></Form.Control>
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
