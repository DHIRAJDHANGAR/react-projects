import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import MyTodo from "./MyTodo/MyTodo";
import MyTodoApp from "./MyTodoApp/MyTodoApp";
import WebcamCapture from "./CamCapture/Index";
import LikeApp from "./LikeApp/LikeApp";
import MyCard from "./Memo/Memo";
import Component_A from "./ChildComp";
import ContextApi from "./ContextAPI/App";
import "./ContextAPI/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyTodo /> */}
    {/* <MyTodoApp /> */}
    {/* <WebcamCapture /> */}
    {/* <LikeApp /> */}
    {/* <MyCard /> */}
    {/* <Component_A /> */}
    <ContextApi />
  </React.StrictMode>
);
