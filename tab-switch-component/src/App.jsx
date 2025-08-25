import React, { useState } from 'react';
import './Tabs.css'; // Optional: for styling

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <p>Welcome to the Home tab!</p>;
      case 'Profile':
        return <p>This is your Profile tab.</p>;
      case 'Settings':
        return <p>Adjust your Settings here.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        {['Home', 'Profile', 'Settings'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
