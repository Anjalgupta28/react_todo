import React from 'react';

const Input = ({ type = 'text', value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`input ${className}`}
      style={{
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '100%',
      }}
    />
  );
};

export default Input;
