import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = (props) => {
  let display = "none";
  let ifExit = props.ifExit ? "Вихід" : "Вхід";
  let page = "";

  if (props.userName !== "") {
    display = "block";
  }
  const handleClick = () => {
    if (ifExit === "Вихід") {
      props.exit();
    }
  };

  return (
    <div className="headerContainer">
      <div className="headItem">
        <Link
          className="textHeaderContainer"
          onClick={handleClick}
          to="/authorization"
        >
          <i
            className="bi bi-door-open-fill"
            style={{ margin: "10px", color: "green" }}
          ></i>
          {ifExit}
        </Link>
      </div>

      <div className="headItem">
        <p className="textHeaderContainer" style={{ display }}>
          Привіт - <span>{props.userName}</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
