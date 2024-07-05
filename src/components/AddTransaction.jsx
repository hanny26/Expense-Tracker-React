// src/components/AddTransaction.jsx
import React, { useState } from 'react';
import './AddTransaction.css';
const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) {
      alert('Please provide text and amount');
      return;
    }
    onAdd({ text, amount: +amount, category, date: new Date() });
    setText('');
    setAmount('');
    setCategory('');
  };

  return (
    <div className="add-transaction-container">
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
