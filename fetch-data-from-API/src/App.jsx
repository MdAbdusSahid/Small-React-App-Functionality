import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📋 User List</h2>
      {loading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      {!loading && !error && (
        <ul style={styles.list}>
          {users.map((user) => (
            <li key={user.id} style={styles.listItem}>
              <strong>{user.name}</strong> <br />
              <span style={styles.email}>{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  loading: {
    textAlign: "center",
    color: "#555",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "#fff",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  email: {
    color: "#555",
    fontSize: "14px",
  },
};

export default App;
