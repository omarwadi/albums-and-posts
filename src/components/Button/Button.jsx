import React from "react";

export default function Button(props) {

  return (
    <div className="content">
      <button className="btn-component" onClick={props.onclick}>{props.buttonValue}</button>
  </div>
  );
}