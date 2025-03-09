import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const signup = async (email, password) => {
    try {
      const response = await axios.post('/api/signup', { email, password });
      setUser(response.data.user); // Store user info as needed
      setError('');
    } catch (err) {
      setError(err.response.data.message || 'Signup failed. Please try again.');
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/login', { email, password });
      setUser(response.data.user); // Store user info as needed
      setError('');
    } catch (err) {
      setError(err.response.data.message || 'Login failed. Please try again.');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, error, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
