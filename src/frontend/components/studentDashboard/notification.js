import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          Your Assignment Has Been Uploaded Successfully
        </Alert.Heading>
        <p>
          This Assignment deadline is 10 May 2023. Do thisTask with The Help Of
          Recursion.
        </p>
      </Alert>
    );
  }
}

export default AlertDismissibleExample;
