import React from "react";

const Todoitem = (prop) => {
  return (
    <div id="todoitems">
      <div>
        <input type="checkbox" />
        <span>{prop.text}</span>
      </div>
      <p>. . .</p>
    </div>
  );
};

export default Todoitem;
