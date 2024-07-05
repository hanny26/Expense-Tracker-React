// src/components/ExpenseList.jsx
import React from 'react';

const ExpenseList = ({ transactions, onDelete }) => {
  return (
    <div>
      <h3>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span> <span>({transaction.category})</span>
            <button onClick={() => onDelete(transaction.id)} className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
