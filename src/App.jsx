import React from "react";
import Logo from "./Components/Logo";
import PakageList from "./Components/PakageList";
import Form from "./Components/Form";
import Stats from "./Components/Stats";
import { useState } from "react";

function App() {
  let [items, setItems] = useState([]);

  //Adding Items to the existing array
  function handleItem(item) {
    setItems((items) => [...items, item]);
    // console.log(items);
  }
  // Deleting the items from the array without mutating
  function handleDelete(id) {
    setItems((item) => item.filter((i) => i.id !== id));
  }
  // Updating the item in the array without mutating
  function checkBoxHandle(id) {
    setItems((items) =>
      items.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  }
  function clearListHandler() {
    let confirmed = window.confirm("Are you sure to want delete the List");
    if (confirmed && items.length > 0) setItems([]);
    else alert("Add something  first to see the Clear List magic🪄🪄🔮🔮");
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItem} />
      <PakageList
        item={items}
        deleteFunciton={handleDelete}
        checkBoxHandle={checkBoxHandle}
        clearListHandler={clearListHandler}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
