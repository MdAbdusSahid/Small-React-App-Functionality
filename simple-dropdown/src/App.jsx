import React, { useState } from "react";
import "./style.css";

const App = () => {
  const options = ["India", "Japan", "Russia", "Australia"];
  const [select, setSelect] = useState("");

  return (
    <div className="dropdown-container">
      <h2 className="dropdown-title">🌍 Select Your Country</h2>
      <select
        className="dropdown-select"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {select && (
        <p className="dropdown-message">
          ✅ You have selected <strong>{select}</strong> country.
        </p>
      )}
    </div>
  );
};

export default App;
