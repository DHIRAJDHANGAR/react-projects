import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTodo from "./MyTodo/MyTodo";
import MyTodoApp from "./MyTodoApp/MyTodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <MyTodo /> */}
    <MyTodoApp />
  </React.StrictMode>
);
