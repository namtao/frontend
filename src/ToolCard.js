import React from 'react';
import './ToolCard.css'; // Create this CSS file for styling

const ToolCard = ({ icon, title }) => {
  return (
    <div className="tool-card">
      <img src={icon} alt={title} className="tool-icon" />
      <p>{title}</p>
    </div>
  );
};

export default ToolCard;
