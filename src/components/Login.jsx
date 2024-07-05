// src/components/Login.jsx
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const { login } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (isSignUp) {
      if (users.find(user => user.username === username)) {
        alert('Username already exists');
        return;
      }

      const newUser = { username, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Account created successfully');
      setIsSignUp(false);
    } else {
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        login(username, password);
      } else {
        alert('Invalid credentials');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        <p>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={() => setIsSignUp(!isSignUp)} className="toggle-auth">
            {isSignUp ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
