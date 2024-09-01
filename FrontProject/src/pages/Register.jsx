// src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../services/api';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('waiter'); // Default role

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, password, role };
    const result = await registerUser(userData);
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="waiter">Waiter</option>
        <option value="bartender">Bartender</option>
        <option value="shift_manager">Shift Manager</option>
        <option value="restaurant_manager">Restaurant Manager</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
