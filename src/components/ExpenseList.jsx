// src/components/ExpenseList.jsx
import React from 'react';

const ExpenseList = ({ transactions, onDelete }) => {
  return (
    <div className="expense-list-container">
      <h3>History</h3>
      <ul>
        {transactions.map(transaction => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? 'minus' : 'plus'}
          >
            {transaction.text} <span>${Math.abs(transaction.amount)}</span>
            <button onClick={() => onDelete(transaction.id)} className="delete-btn">
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
