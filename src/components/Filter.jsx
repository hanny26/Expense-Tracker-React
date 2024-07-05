// src/components/Filter.jsx
import React, { useState } from 'react';
import './Filter.css';
const Filter = ({ onFilter }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleFilter = (e) => {
    e.preventDefault();
    onFilter({ text, category });
  };

  return (
    <div className="filter-container">
      <h3>Filter Transactions</h3>
      <form onSubmit={handleFilter}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
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
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

export default Filter;
