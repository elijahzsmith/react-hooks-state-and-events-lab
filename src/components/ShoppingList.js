import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelect] = useState('Filter by category')
  console.log(items)

  function handleFilter(e) {
    setSelect(e.target.value)
  }
  const foodsToDisplay = items.filter(item => {
    if (selectedCategory === 'Filter by category') {
      return true
    } else {
      return item.category === selectedCategory
    }
  })

  const foodList = foodsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => handleFilter(e)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodList}
      </ul>
    </div>
  );
}

export default ShoppingList;
