// src/components/IncomeExpense.jsx
import React from 'react';
import './IncomeExpense.css';
const IncomeExpense = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="income-expense-container">
      <div className="income">
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div className="expense">
        <h4>Expense</h4>
        <p className="money minus">${Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
