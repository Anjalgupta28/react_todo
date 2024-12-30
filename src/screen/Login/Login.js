import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { LOGIN_TITLE, ENTER_USERNAME_PLACEHOLDER, LOGIN_BUTTON_TEXT, ENTER_USERNAME_ALERT } from '../../utils/Strings';

export const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('user', username);
      navigate('/home');
    } else {
      alert(ENTER_USERNAME_ALERT);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">{LOGIN_TITLE}</h2>
      <input
        type="text"
        placeholder={ENTER_USERNAME_PLACEHOLDER}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        {LOGIN_BUTTON_TEXT}
      </button>
    </div>
  );
};
