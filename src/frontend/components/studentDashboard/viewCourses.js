import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './custom-styles.css';

const subjects = [
  {
    name: "Math",
    grade: "A",
    teacher: "Dr Laeeq",
    // students: ["Talha", "Faez", "Hamza"],
  },
  {
    name: "DSA",
    grade: "A+",
    teacher: "Sir Tahir Iqbal",
    // students: ["Ali", "Ahmed", "Sara"],
  },
  {
    name: "English",
    grade: "D",
    teacher: "Mam Khadija Marium",
    // students: ["Uzair", "Muzamil", "Mishu"],
  },
];

const ShowSubjects = () => {
  return (
    <Container className="my-component">
      <Row className="my-3">
        {subjects.map((subject, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{subject.name}</Card.Title>
                <Card.Title className="mb-2 text-danger">
                  <strong>Grade : {subject.grade} </strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {subject.teacher}
                </Card.Subtitle>
                {/* <Card.Text>
                  Students: {subject.students.join(", ")}
                </Card.Text> */}
                <Card.Link href="#">Submit Assignment</Card.Link>
                <Card.Link href="#">Access Material</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShowSubjects;
