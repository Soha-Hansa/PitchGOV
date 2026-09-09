import React from 'react';

const FlowNode = ({ className, icon, title, subtitle }) => {
  return (
    <div className={`node magnetic-target cursor-pointer ${className}`}>
      <div className="icon">
        {icon}
      </div>
      <h4>{title}</h4>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default FlowNode;
