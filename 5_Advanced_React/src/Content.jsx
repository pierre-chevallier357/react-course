import React from "react";

function Content(props) {
  return (
    <div className="content">
      <h1>{props.num}</h1>
      {props.children}
    </div>
  );
}

export default React.memo(Content);
