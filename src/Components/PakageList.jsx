import React, { useState } from "react";
import Item from "./Item";

function PakageList({
  item,
  deleteFunciton,
  checkBoxHandle,
  clearListHandler,
}) {
  let [sortBy, setSortBy] = useState("input");
  let sortItems;
  if (sortBy === "input") sortItems = item;
  // console.log(sortItems);
  if (sortBy === "description")
    sortItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteFunc={deleteFunciton}
            checkBoxHandle={checkBoxHandle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={clearListHandler}>Clear List</button>
      </div>
    </div>
  );
}

export default PakageList;
<div className="list">PakageList</div>;
