import { Component } from "react";
import { useState } from "react";
import {Button, Col, Container, Input, Row } from "reactstrap";


const MyTodo = () => {
    const [todo, setTodo] = useState([]);
    const [newTodoTitle, setNewTodoTitle] = useState("");
    const [newTodoDiscription, setTodoDiscription] = useState("");

    const handleAddTodo = () => {
        const todoElement = {
          id: new Date().getTime(),
          title: newTodoTitle,
          discription: newTodoDiscription,
          createdAt: new Date(),
        };
    
        setTodo([...todo, todoElement]);
        setNewTodoTitle("");
        setTodoDiscription("");
      };
    
      console.log("LN24:", todo);
    return (
      <>
        <Container>
          <Row>MY TODO APP</Row>
          <Row>
            <label>Title</label>
            <Input
              type="text"
              placeholder="Enter title"
              name="title"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
            />
          </Row>
          <Row>
            <label>Discription</label>
            <Input
              type="text"
              placeholder="Enter discription"
              name="discription"
              value={newTodoDiscription}
              onChange={(e) => setTodoDiscription(e.target.value)}
            />
          </Row>
          <Row>
            <Col>
              <Button onClick={handleAddTodo}>SAVE</Button>
            </Col>
            <Col>
              <Button>EDIT</Button>
            </Col>
            <Col>
              <Button>DELETE</Button>
            </Col>
          </Row>
          <Row>
            <p>My Todo List</p>
          </Row>
          <Row>
              {todo.map((item) => {
                return (
                  <ol key={item.id}>
                    <li>{item.title}</li>
                    <li> {item.discription}</li>
                  </ol>
                );
              })}
          </Row>
        </Container>
      </>
    );
}

export default MyTodo;