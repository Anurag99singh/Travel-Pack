import React from "react";

function Item({ item, deleteFunc, checkBoxHandle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => checkBoxHandle(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteFunc(item.id)}>❌</button>
    </li>
  );
}

export default Item;
