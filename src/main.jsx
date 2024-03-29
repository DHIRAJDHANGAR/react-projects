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
// import "./ContextAPI/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationHome from "./ReactNavigations/NavigationHome";
import NavigationAbout from "./ReactNavigations/NavigationAbout";
import NavigationContact from "./ReactNavigations/NavigationContact";
import NavigationOrder from "./ReactNavigations/NavigationOrder";
import NavigationNotFound from "./ReactNavigations/NavigationNotFound";
import PathparamsV1 from "./NavigationsParams/PathParamsV1";
import PathParamsV2 from "./NavigationsParams/PathParamsV2";
import FilterAPI from "./FilterAPI/Usememo";
import ProductDetails from "./ReactRoutingParams/ProductDetails";
import ProductList from "./ReactRoutingParams/ProductList";
// import OTPHome from "./OTPVarification/OTPHome";
import { Provider } from "react-redux";
import Redux1 from "./Redux/redux1";
import { store } from "./Redux/store";
import Calculatore from "./Redux/Calculatore";
import FirstComp from "./OrderCard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Redux1 /> */}
      <Calculatore />
    </Provider>
    {/* <FilterAPI /> */}
    {/* <App /> */}
    {/* <MyTodo /> */}
    {/* <MyTodoApp /> */}
    {/* <WebcamCapture /> */}
    {/* <LikeApp /> */}
    {/* <MyCard /> */}
    {/* <Component_A /> */}
    {/* <ContextApi /> */}

    {/* React Navigations */}
    {/* <BrowserRouter> */}
    {/* <Routes> */}
    {/* Home */}
    {/* <Route path="/" element={<NavigationHome />}></Route> */}
    {/* About */}
    {/* <Route path="/about" element={<NavigationAbout />}></Route> */}
    {/* Contact */}
    {/* <Route path="/contact" element={<NavigationContact />}></Route> */}
    {/* Order */}
    {/* <Route path="/order" element={<NavigationOrder />}></Route> */}
    {/* Not Found Page */}
    {/* <Route path="/notfound" element={<NavigationNotFound />}></Route> */}
    {/* </Routes> */}
    {/* </BrowserRouter> */}
    {/* React Navigations */}

    {/** React Navigations Params */}
    {/* <BrowserRouter> */}
    {/* <Routes> */}
    {/**Main Param */}
    {/* <Route path="/" element={<PathparamsV1 />}></Route> */}
    {/* <Route
          path="/:id/:myname/:myusername"
          element={<PathParamsV2 />}
        ></Route> */}
    {/* <Route
          path="/product-details/:meraProductId"
          element={<ProductDetails />}
        ></Route> */}
    {/* <Route path="/" element={<ProductList />}></Route> */}

    {/**Navigation Param Data */}
    {/* </Routes> */}
    {/* </BrowserRouter> */}
    {/** React Navigations Params */}
    <>
      {/* <Provider store={store}>
        <FirstComp />
      </Provider> */}
      {/* <App /> */}
    </>
  </React.StrictMode>
);
