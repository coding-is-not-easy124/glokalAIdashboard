import React from 'react';
import './StatusBar.css';

const StatusBar = ({ approvalChance }) => {
  const getStatusColor = () => {
    if (approvalChance >= 70) return 'green';
    if (approvalChance >= 40) return 'yellow';
    return 'red';
  };

  return (
    <div className="status-bar">
      <div
        className={getStatusColor()}
        style={{ width: `${approvalChance}%` }}
      ></div>
    </div>
  );
};

export default StatusBar;