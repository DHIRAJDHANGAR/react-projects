import { Link } from "react-router-dom";

const NavigationNotFound = () => {
  return (
    <>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            Home
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
        <p>The page you're trying is not available</p>
      </div>
    </>
  );
};

export default NavigationNotFound;
