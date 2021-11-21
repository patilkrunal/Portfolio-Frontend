import React from "react";
import "../styles/bootstrap.min.css";

const Toggler = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);
export default Toggler;
