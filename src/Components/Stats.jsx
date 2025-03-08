import React from "react";

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Add some Items to your List 🚀🚀</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((items) => items.packed).length;
  // const packedItems = items.reduce(
  //   (acc, items) => (items.packed === true ? (acc = acc + 1) : (acc = acc + 0)),
  //   0
  // );

  const percentageItems =
    numItems === 0 ? 0 : Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      {percentageItems === 100 ? (
        <em>You have everything packed and you are ready to go!!!! ✈️✈️</em>
      ) : (
        <em>
          💼 You have {numItems} item on your list, and you already packed{" "}
          {packedItems} ({percentageItems}%)
        </em>
      )}
    </footer>
  );
}

export default Stats;
