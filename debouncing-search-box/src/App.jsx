import React, { useRef, useState,useCallback } from 'react'
import Confetti from 'js-confetti'
import './style.css'
const App = () => {

  const [text, setText] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const debounce=(fn, delay)=>{
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  const updateValue = (value) => {
    setDebouncedValue(value);
  };

  const debouncedUpdate = useCallback(debounce(updateValue, 700), []);

  const handleChange = (e) => {
    setText(e.target.value);      
    debouncedUpdate(e.target.value);
  };

  return (
    <div>
      <input value={text} onChange={handleChange} placeholder="Type something" />
      <p>Immediate value: {text}</p>
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
}


export default App