import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

const EnrollmentRequests = () => {
  const [enrollmentRequests, setEnrollmentRequests] = useState([
    { id: 1, name: "Discrete Math", email: "bsef21m517@pucit.edu.pk" },
    { id: 2, name: "DSA", email: "bsef21m531@pucit.edu.pk" },
    { id: 3, name: "OOP", email: "bsef21m517@pucit.edu.pk" },
  ]);

  const handleAccept = (id) => {
    setEnrollmentRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== id)
    );
  };

  const handleReject = (id) => {
    setEnrollmentRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== id)
    );
  };

  return (
    <div className="container my-5">
      <h1>Enrollment Requests</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enrollmentRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.name}</td>
              <td>{request.email}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleAccept(request.id)}
                >
                  Accept
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleReject(request.id)}
                >
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EnrollmentRequests;
