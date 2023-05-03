import { Link } from "react-router-dom";

const NavigationHome = () => {
  return (
    <>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to={"/about"} className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/order"} className="nav-link">
            Order
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/notFound"} className="nav-link">
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
