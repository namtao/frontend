import React from 'react';
import ToolCard from './ToolCard';
import './ToolGrid.css'; // Create this CSS file for styling

const tools = [
  { title: 'Ghép file PDF', icon: 'path/to/icon1.png' },
  { title: 'Tách file PDF', icon: 'path/to/icon2.png' },
  // Add more tools here
];

const ToolGrid = () => {
  return (
    <div className="tool-grid">
      {tools.map((tool, index) => (
        <ToolCard key={index} title={tool.title} icon={tool.icon} />
      ))}
    </div>
  );
};

export default ToolGrid;
