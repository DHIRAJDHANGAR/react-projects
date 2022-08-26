import { Link } from "react-router-dom";

const NavigationHome = () => {
  return (
    <>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <Link to={"/about"} class="nav-link">
            About
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/contact"} class="nav-link">
            Contact
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/order"} class="nav-link">
            Order
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/notFound"} class="nav-link">
            Open Any Profile
          </Link>
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Im Home Container</p>
        <iframe
          width="700"
          height="400"
          src="https://www.youtube.com/embed/u7JsKhI2An0"
        ></iframe>
      </div>
    </>
  );
};
export default NavigationHome;
