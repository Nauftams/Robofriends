import React from "react";
import "../Scroll.css";

const Scrol = (props) => {
  return <div style={{ overflowY: "scroll ", border: "5px solid black", height: "500px" }}> {props.children} </div>;
};

export default Scrol;
