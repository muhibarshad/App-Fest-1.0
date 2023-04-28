import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './custom-styles.css';

const ScheduleShow = () => {
  const courses = [
    { id: 1, name: 'Mathematics', teacher: 'Sir Laeeq', time: 'Monday 9:55 AM - 11:20 AM' },
    { id: 2, name: 'DSA', teacher: 'Sir Tahir', time: 'Tuesday 11:20 PM - 12:45 PM' },
    { id: 3, name: 'English', teacher: 'Mam Khadija', time: 'Wednesday 10:00 AM - 12:00 PM' },
    { id: 4, name: 'Software Engineering', teacher: 'Sir Khurram', time: 'Thursday 11:00 AM - 1:00 PM' },
  ];

  return (
    <Container className='my-component'>
      <Row>
        <Col>
          <h1>Online Classes Schedule</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Course Name</th>
                <th>Teacher</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.teacher}</td>
                  <td>{course.time}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ScheduleShow;
