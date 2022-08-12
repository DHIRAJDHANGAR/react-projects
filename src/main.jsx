import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
// import "./index.css";
import MyTodo from "./MyTodo/MyTodo";
import MyTodoApp from "./MyTodoApp/MyTodoApp";
import WebcamCapture from "./CamCapture/Index";
import LikeApp from "./LikeApp/LikeApp";
import PrintData from "./LikeApp/Try";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyTodo /> */}
    {/* <MyTodoApp /> */}
    {/* <WebcamCapture /> */}
    {/* <LikeApp /> */}
    <PrintData />
  </React.StrictMode>
);
