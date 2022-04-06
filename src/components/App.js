import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isOn, setDark] = useState(false)

  function handleDarkMode() {
    setDark((isOn) => !isOn)
  }
  
  const appClass = isOn ? "App dark" : "App light"
  const textContent = isOn ? "Light Mode" : "Dark Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{textContent}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
