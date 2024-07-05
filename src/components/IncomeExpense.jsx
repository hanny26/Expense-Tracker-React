// src/components/IncomeExpense.jsx
import React from 'react';

const IncomeExpense = ({ transactions }) => {
  const income = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const expense = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div>
      <div>
        <h4>Income</h4>
        <p className="money plus">${income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
