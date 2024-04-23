import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <div>
      <button className="btn-link btn-design" type="button">
        {props.label}
      </button>
    </div>
  );
};

export default Button;
