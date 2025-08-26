import React from 'react';

const Child = ({ onSendData }) => {
  const handleClick = () => {
    onSendData("Hello Parent! 👋");
  };

  return (
    <button className="btn" onClick={handleClick}>
      Send Message to Parent
    </button>
  );
};

export default Child;
