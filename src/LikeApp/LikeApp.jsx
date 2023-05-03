import { Button, Card, Col, Row, CardBody, Input } from "reactstrap";
import { SpinnerDotted } from "spinners-react";
import "./LikeApp.css";

import React, { useEffect, useState, useMemo } from "react";

const LikeApp = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [favList, setFavList] = useState([]);
  const [isActive, setActive] = useState("true");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //       setSearchList(data); //filter list data
  //     });
  // }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setSearch("");
      });
  }, []);

  //useMemo
  const filteredUsers = useMemo(() => {
    const filteredResult = users.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    return filteredResult;
  }, [search, users]);

  // We'll retrive filter data from the users array
  //input search list filter
  // useEffect(() => {
  //   if (search === "") {
  //     setUsers([...searchList]);
  //   }
  //   const filterList = searchList.filter((elem) => {
  //     if (elem.name.toLowerCase().includes(search.toLocaleLowerCase())) {
  //       return elem;
  //     }
  //   });
  //   setUsers(filterList);
  // }, [search]);

  const addToFavList = (data) => {
    const hasElementInFav = favList.some((item) => item.id === data.id);
    if (hasElementInFav) {
      return;
    }
    setFavList((prv) => {
      return [...prv, data];
    });
  };

  const deleteFavList = (id) => {
    const deleteTodo = favList.filter((item) => {
      return item.id !== id;
    });
    setFavList(deleteTodo);
  };
  console.log("favList : ", favList);
  return (
    <>
      <Row className="searchBoxContainer">
        {/* <Input
          type="text"
          className="searchBox"
          placeholder="Search name here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> */}

        {/* useMemo */}
        <Input
          style={{ width: "500px" }}
          value={search}
          type="search"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Row>

      <Row>
        <Col>
          <Col className="section">
            {filteredUsers.map((user) => (
              <Card key={user.id} className={"cardContainer"}>
                <CardBody>
                  <p>name: {user.name}</p>
                  <p>username: {user.username}</p>
                  <Button onClick={() => addToFavList(user)}>Favorite</Button>
                  <Button onClick={() => deleteFavList(user.id)}>Delete</Button>
                </CardBody>
              </Card>
            ))}
          </Col>
        </Col>
        <Col>
          <Col className="section">
            {favList.map((item) => (
              <Card key={item.id} className="cardContainer">
                <CardBody>
                  <p>name: {item.name}</p>
                  <p>username: {item.username}</p>
                  <Button onClick={() => deleteFavList(item.id)}>Delete</Button>
                </CardBody>
              </Card>
            ))}
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default LikeApp;
