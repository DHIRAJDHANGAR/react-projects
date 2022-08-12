import { useState } from "react";
import { Button, Row, Col } from "reactstrap";

const PrintData = () => {
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  return (
    <>
      <Row>
        <Button onClick={() => fetchData()}>addData</Button>
      </Row>
      <Row>
        <Col>
          <ul>
            {users.map((item) => (
              <ol key={item.id}>
                <li>name:{item.name}</li>
                <li>username:{item.username}</li>
                <li>email:{item.email}</li>
              </ol>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  );
};
export default PrintData;
