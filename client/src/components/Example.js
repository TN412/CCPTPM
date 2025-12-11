import React from 'react';

const Example = ({ title, description }) => {
  return (
    <div style={{ 
      padding: '1rem', 
      margin: '1rem 0', 
      border: '1px solid #ddd',
      borderRadius: '4px' 
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Example;
