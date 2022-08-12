import {
  Button,
  Card,
  Col,
  Row,
  CardText,
  CardBody,
  CardTitle,
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
    setFavorite([...notFavorite, ...addToFavorite]);
    console.log(notFavorite);
  };

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
            <Col>
              {users.map((user) => (
                <Card key={user.id} className={"cardContainer"}>
                  <CardBody>
                    <CardTitle>
                      <div>{user.name}</div>
                      <div>{user.username}</div>
                      <div>{user.email}</div>
                    </CardTitle>
                    <CardText>
                      <div>{user.address.street}</div>
                      <div>{user.address.suite}</div>
                      <div> {user.address.city}</div>
                      <div>{user.address.zipcode}</div>
                      <div>{user.address.geo.lat}</div>
                      <div>{user.address.geo.lng}</div>
                      <div>{user.phone}</div>
                      <div>{user.website}</div>
                      <div>{user.company.name}</div>
                      <div> {user.company.catchPhrase}</div>
                      <div>{user.company.bs}</div>
                    </CardText>
                    <Button onClick={() => addToFavoriteList(user.id)}>
                      Favorite
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </Col>
          )}
        </Col>
        <Col>
          {notFavorite.length > 0 && (
            <Col className="">
              {notFavorite.map((item) => (
                <Card key={item.id} className="cardContainer">
                  <CardBody>
                    <CardTitle>
                      <div>{item.name}</div>
                      <div>{item.username}</div>
                      <div>{item.email}</div>
                    </CardTitle>
                    <CardText>
                      <div>{item.address.street}</div>
                      <div>{item.address.suite}</div>
                      <div>{item.address.city}</div>
                      <div>{item.address.zipcode}</div>
                      <div>{item.address.geo.lat}</div>
                      <div>{item.address.geo.lng}</div>
                      <div>{item.phone}</div>
                      <div>{item.website}</div>
                      <div>{item.company.name}</div>
                      <div>{item.company.catchPhrase}</div>
                      <div>{item.company.bs}</div>
                    </CardText>
                    <Button>Delete</Button>
                  </CardBody>
                </Card>
              ))}
            </Col>
          )}
        </Col>
      </Row>
    </>
  );
};

export default LikeApp;

// const handelFavDelete = (id) => {
//   setFav((fav) => {
//     return fav.filter((arrElem, index) => {
//       return index !== id
//     })
//   })
// }
