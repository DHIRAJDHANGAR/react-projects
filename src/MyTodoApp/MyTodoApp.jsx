import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
import DeleteButton from "./DeleteButton";

import InputText from "./InputText";
import "./MyTodoApp.css";

const MyTodoApp = () => {
  const [todo, setTodo] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDiscription, setTodoDiscription] = useState("");
  const [search, setSearch] = useState("");

  const handleAddTodo = () => {
    const todoElement = {
      id: new Date().getTime(),
      // uuid import
      // id: uuid()
      title: newTodoTitle,
      discription: newTodoDiscription,
    };

    if (todoElement.title == "") {
      return alert("Enter Title");
    } else if (todoElement.discription == "") {
      return alert("Enter Discription");
    }

    setTodo([...todo, todoElement]);
    setNewTodoTitle("");
    setTodoDiscription("");
  };

  const handleDeleteTodo = (id) => {
    const deleteTodo = todo.filter((item) => {
      return item.id !== id;
    });
    setTodo(deleteTodo);
  };
  return (
    <>
      <Container className="parentContainer">
        <Row className="header">My Todo List</Row>
        <Row className="bodyContainer">
          <Row className="titleContainer">
            <label className="lebal">Title</label>
            {/* InputText import for title */}
            <InputText
              type="text"
              value={newTodoTitle}
              onTextChange={(e) => {
                setNewTodoTitle(e.target.value);
              }}
            />
          </Row>

          <Row>
            <label className="lebal">Discription</label>
            {/* InputText import for discription */}
            <InputText
              type="text"
              value={newTodoDiscription}
              onTextChange={(e) => {
                setTodoDiscription(e.target.value);
              }}
            />
          </Row>
        </Row>
        <Row className="buttonSave">
          <Button onClick={handleAddTodo} className="saveBtn">
            SAVE
          </Button>
        </Row>
        <Row>
          <p className="lebal">Todo List</p>
          <Input type="text" onClick={(e) => setSearch(e.target.value)} />
        </Row>
        {/* Print Todo List Element */}
        <Row className="printTodoList">
          {todo.map((item) => {
            return (
              <Col key={item.id} className="todoCard">
                <Row className="cardSection">
                  <Row className="cardTitle">{item.title}</Row>
                  <Row className="cardDiscription">{item.discription}</Row>
                </Row>
                <Row className="cardBtn">
                  <Col>
                    <Button className="button">EDIT</Button>
                  </Col>
                  <Col>
                    <DeleteButton
                      label="DELETE"
                      onClick={() => handleDeleteTodo(item.id)}
                    />
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default MyTodoApp;
