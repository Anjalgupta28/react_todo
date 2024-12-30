import React from 'react';

const Modal = ({ isVisible, title, children, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '20px',
          width: '90%',
          maxWidth: '500px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>{title}</h2>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
            }}
          >
            ✖
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
