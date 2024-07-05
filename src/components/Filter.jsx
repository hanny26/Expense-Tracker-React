// src/components/Filter.jsx
import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ text, category });
  };

  return (
    <div>
      <h3>Filter Transactions</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="filterText">Text</label>
          <input
            type="text"
            id="filterText"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label htmlFor="filterCategory">Category</label>
          <input
            type="text"
            id="filterCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category..."
          />
        </div>
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

export default Filter;
