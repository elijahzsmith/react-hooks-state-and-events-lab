import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelect] = useState('All')
  console.log(items)

  function handleFilter(e) {
    setSelect(e.target.value)
  }
  const foodsToDisplay = items.filter(item => {
    return selectedCategory === 'All' ? true : item.category === selectedCategory
    // if (selectedCategory === 'All') {
    //   return item.category // also did true and that worked as well
    // } else {
    //   return item.category === selectedCategory
    // }
  })

  const foodList = foodsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter} name="filter">
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
