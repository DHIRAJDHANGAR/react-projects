import {
  Button,
  Card,
  Col,
  Row,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import "./LikeApp.css";

import React, { useState } from "react";

const LikeApp = () => {
  const [users, setUsers] = useState([]);
  const [notFavorite, setFavorite] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  const addToFavoriteList = (id) => {
    const addToFavorite = users.filter((item) => {
      return item.id == id;
    });
    setFavorite([...notFavorite, addToFavorite]);
  };
  console.log("notFavorite::", notFavorite);
  return (
    <>
      <Row className="buttonClick">
        <Button
          className="startButton"
          onClick={() => {
            fetchData();
          }}
        >
          Start
        </Button>
      </Row>
      <Row>
        <Col>
          {users.length > 0 && (
            <ul>
              {users.map((user) => (
                <Card
                  key={user.id}
                  style={{ backgroundColor: "rgb(33, 236, 169)" }}
                >
                  <CardBody>
                    <CardTitle>
                      {user.name}
                      <hr />
                      {user.username}
                      <hr />
                      {user.email}
                    </CardTitle>
                    <CardSubtitle>
                      {user.address.street}
                      <hr />
                      {user.address.suite}
                      <hr />
                      {user.address.city}
                      <hr />
                      {user.address.zipcode}
                      <hr />
                      {user.address.geo.lat}
                      <hr />
                      {user.address.geo.lng}
                    </CardSubtitle>
                    <CardText>
                      {user.phone}
                      {user.website}
                      {user.company.name}
                      {user.company.catchPhrase}
                      {user.company.bs}
                    </CardText>
                    <Button onClick={() => addToFavoriteList(user.id)}>
                      Favorite
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </ul>
          )}
        </Col>
        <Col>
          {notFavorite.length > 0 && (
            <ul>
              {notFavorite.map((item) => (
                <Card
                  key={item.id}
                  style={{ backgroundColor: "rgb(33, 236, 169)" }}
                >
                  {/* <CardBody>
                    <CardTitle>
                      {item.name}
                      <hr />
                      {item.username}
                      <hr />
                      {item.email}
                    </CardTitle>
                    <CardSubtitle>
                      {item.address.street}
                      <hr />
                      {item.address.suite}
                      <hr />
                      {item.address.city}
                      <hr />
                      {item.address.zipcode}
                      <hr />
                      {item.address.geo.lat}
                      <hr />
                      {item.address.geo.lng}
                    </CardSubtitle>
                    <CardText>
                      {item.phone}
                      {item.website}
                      {item.company.name}
                      {item.company.catchPhrase}
                      {item.company.bs}
                    </CardText>
                    <Button>Delete</Button>
                  </CardBody> */}
                </Card>
              ))}
            </ul>
          )}
        </Col>
      </Row>
    </>
  );
};

export default LikeApp;
