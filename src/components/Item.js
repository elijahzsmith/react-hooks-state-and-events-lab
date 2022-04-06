import React, { useState }  from "react";

function Item({ name, category }) {
  const [isIn, addItem] = useState(false)

  function handleCart() {
    addItem((isIn) => !isIn)
  }

  const listClass = isIn ? "in-cart" : ""
  const color = isIn ? "purple" : "yellow"
  const text = isIn ? "Remove From Cart" : "Add to Cart"


  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add" style={{ background: color }}>{text}</button>
    </li>
  );
}

export default Item;
