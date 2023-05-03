import { Link } from "react-router-dom";

const NavigationOrder = () => {
  return (
    <>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            Home
          </Link>
        </li>
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
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Im Order Container</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wObJkFI_E8I"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};
export default NavigationOrder;
