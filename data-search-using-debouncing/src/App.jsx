import React, { useRef, useState, useEffect } from "react";
import Confetti from "js-confetti";
import "./style.css";
const App = () => {
  const country = ["India", "USA", "Austrlia", "Japan", "China", "Russia"];
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  const filteredCountry =
    debouncedSearch === ""
      ? []
      : country.filter((m) =>
          m.toLowerCase().includes(debouncedSearch.toLowerCase()),
        );

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Country Search</h2>
        <input
          style={{ padding: "8px", width: "250px", textAlign: "center" }}
          value={search}
          onChange={handleChange}
          placeholder="Search Country"
        />
        <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
          {filteredCountry.length > 0 ? (
            filteredCountry.map((fc, key) => <li key={key}>{fc}</li>)
          ) : debouncedSearch === "" ? (
            []
          ) : (
            <li>No Country Found</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default App;
