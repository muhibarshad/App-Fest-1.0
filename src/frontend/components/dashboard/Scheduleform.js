import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./custom-styles.css";

const AddSubjectForm = ({ onAdd }) => {
  const [subjectName, setSubjectName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(subjectName);
    setSubjectName("");
  };

  return (
    <Container className="assignment">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            <strong>Subject Name</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject name"
            value={subjectName}
            onChange={(event) => setSubjectName(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <strong>Subject Teacher</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject Teacher"
            value={subjectName}
            onChange={(event) => setSubjectName(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <strong>Deadline Date</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Assignment Deadline"
            value={subjectName}
            onChange={(event) => setSubjectName(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary my-3" type="submit">
          Upload Assignment
        </Button>
      </Form>
    </Container>
  );
};

export default AddSubjectForm;
