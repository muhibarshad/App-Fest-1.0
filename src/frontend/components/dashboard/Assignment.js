import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import './custom-styles.css';

function SmallExample() {
  return (
   
    <Table class="table my-5">
        <thead>
          <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Assignment Number </th>
            <th scope="col">Course Teacher </th>
            <th scope="col">Assignment Deadline </th>
            {/* <th scope="col">Price</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">OOP</th>
            <td>1</td>
            <td>Sir Nadeem </td>
            <td>29/04/2023</td>
            {/* <td><Button variant="primary my-3 mx-3">Submit</Button>{' '}</td> */}
          </tr>
          <tr>
            <th scope="row">DSA </th>
            <td>2</td>
            <td>Sir Tahir Iqbal </td>
            <td>01/05/2023</td>
            {/* <td><Button variant="primary my-3 mx-3">Submit</Button>{' '}</td> */}
          </tr>
        </tbody>
      </Table>
  );
}

export default SmallExample;