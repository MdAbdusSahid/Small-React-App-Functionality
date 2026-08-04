import React from "react";
import useCounter from "./useCounter";
import "./style.css"
import usePrevious from "./usePrevious";

const App = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  const [count, setCount] = useState(0);

  return (
     <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Current count: {count}</h2>
      {/* On the very first render, prevCount will be undefined */}
      <h3>
        Previous count: {prevCount === undefined ? "undefined" : prevCount}
      </h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f4f6f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Counter App with Custom Hook</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={increment}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            background: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }}
        >
          Increment
        </button>

        <button
          onClick={decrement}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            background: "#f39c12",
            color: "white",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>

        <button
          onClick={reset}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            background: "#e74c3c",
            color: "white",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>

      <p
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {count}
      </p>
    </div>
  );
};

export default App;
