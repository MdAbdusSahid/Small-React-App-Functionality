import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(5);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <input
        value={num}
        onChange={(e) => setNum(e.target.value)}
        type="number"
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(num)));
        }}
      >
        Increse By Amount
      </button>
    </>
  );
}
export default App;
