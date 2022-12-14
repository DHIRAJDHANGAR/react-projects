import { Component, useState } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
import InputText from "./InputText";
import "./MyTodo.css";

const MyTodo = () => {
  const [todo, setTodo] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDiscription, setTodoDiscription] = useState("");

  //handleToDoTitle
  // function handleToDoTitle(e) {
  //   setNewTodoTitle(e.target.value);
  // }
  //handleToDoDiscription
  // function handleToDoDiscription(e) {
  //   setTodoDiscription(e.target.value);
  // }

  const handleAddTodo = () => {
    const todoElement = {
      id: new Date().getTime(),
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
            {/* <Input
              type="text"
              placeholder="Enter title"
              name="title"
              value={newTodoTitle}
              // onChange={handleToDoTitle}
              onTitleChnage={(e) => {
                setNewTodoTitle(e.target.value);
              }}
              className="titleInput"
            /> */}
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
            {/* <Input
              type="text"
              placeholder="Enter discription"
              name="discription"
              value={newTodoDiscription}
              // onChange={handleToDoDiscription}
              onChange={(e) => {
                setTodoDiscription(e.target.value);
              }}
              className="discriptionInput"
            /> */}
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
                    <Button
                      onClick={() => handleDeleteTodo(item.id)}
                      className="button"
                    >
                      DELETE
                    </Button>
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

export default MyTodo;
