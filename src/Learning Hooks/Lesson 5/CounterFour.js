import React, { useState } from "react";

function CounterFour() {
  const [items, setItems] = useState([]);
  const [itemInput, setItemInput] = useState("");
  const [itemId, setItemId] = useState(0);

  const deleteItem = (id) => {
    const auxArray = items.filter((item) => item.id !== id);
    setItems(auxArray);
  };

  const addItem = () => {
    const auxArray = items.concat([
      {
        id: itemId,
        value: itemInput,
      }
    ]);
    setItems(auxArray);
    setItemInput("");
    setItemId(itemId + 1);
  };

  return (
    <div>
      <input
        type="text"
        name="itemText"
        id="inputItemText"
        value={itemInput}
        onChange={(e) => {
          setItemInput(e.target.value);
        }}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {" "}
            {item.value}{" "}
            <button
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              Delete Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CounterFour;
