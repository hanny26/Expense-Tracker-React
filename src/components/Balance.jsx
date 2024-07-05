// src/components/Balance.jsx
import React from 'react';

const Balance = ({ transactions }) => {
  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total.toFixed(2)}</h1>
    </div>
  );
};

export default Balance;
