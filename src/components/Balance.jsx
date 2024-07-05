// src/components/Balance.jsx
import React from 'react';
import './Balance.css';
const Balance = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="balance-container">
      <h3>Your Balance</h3>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
