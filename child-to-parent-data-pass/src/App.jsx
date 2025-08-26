import React, { useState } from 'react';
import './style.css';
import Child from './Child';

const App = () => {
  const [message, setMessage] = useState('');

  const handleChildData = (data) => {
    setMessage(data);
  };

  return (
    <div className="container">
      <h1 className="message">Message from Child: {message}</h1>
      <Child onSendData={handleChildData} />
    </div>
  );
};

export default App;
