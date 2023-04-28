import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import './custom-styles.css';

const GroupChat = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      setChatMessages([
        ...chatMessages,
        { sender: "student", message: message },
      ]);
      setMessage("");
    }
  };

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Container className="my-component">
      <h2>Group Chat</h2>
      <Row>
        <Col md={8}>
          <ListGroup>
            {chatMessages.map((chatMessage, index) => (
              <ListGroup.Item
                key={index}
                variant={
                  chatMessage.sender === "teacher" ? "primary" : "secondary"
                }
              >
                {chatMessage.sender === "teacher" ? "Teacher" : "Student"}:{" "}
                {chatMessage.message}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Form onSubmit={sendMessage}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Type your message"
                value={message}
                onChange={onMessageChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
        <Col md={4}>
          <h4>Participants</h4>
          <ListGroup>
            <ListGroup.Item>Teacher</ListGroup.Item>
            <ListGroup.Item>Student 1</ListGroup.Item>
            <ListGroup.Item>Student 2</ListGroup.Item>
            <ListGroup.Item>Student 3</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default GroupChat;
