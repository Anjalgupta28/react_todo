import React from 'react';

const Button = ({ onClick, children, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      disabled={disabled}
      style={{
        padding: '10px 20px',
        backgroundColor: disabled ? '#ccc' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
