import React, { useState, useEffect } from "react";
import Confetti from "js-confetti";
import "./style.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");

  useEffect(() => {
    const handler =
      search === ""
        ? (setDebounceSearch(""), null) 
        : setTimeout(() => setDebounceSearch(search), 700);

    return () => handler && clearTimeout(handler);
  }, [search]);

  const searchedUser =
    debounceSearch === ""
      ? []
      : users.filter((u) =>
          u.name.toLowerCase().includes(debounceSearch.toLowerCase())
        );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const timeoutId = setTimeout(() => {
          controller.abort();
        }, 5000);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal }
        );

        clearTimeout(timeoutId);

        if (!response.ok) throw new Error(response.status);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        if (error.name === "AbortError") {
          setError("⏳ Request timed out or was aborted");
        } else {
          setError(error.message || "Unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <div className="app-container">
      <h2 className="title">Search Users from List</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Type a name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isLoading && <p className="status">Loading...</p>}
      {error && <p className="status error">Data fetch failed: {error}</p>}

      {!isLoading && !error && (
        <ul className="user-list">
          {searchedUser.length > 0 ? (
            searchedUser.map((user) => <li key={user.id}>{user.name}</li>)
          ) : debounceSearch === "" ? null : (
            <li className="not-found">User not found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default App;
