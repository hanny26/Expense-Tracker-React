// src/components/MonthlySummary.jsx
import React from 'react';
import './MonthlySummary.css'
const MonthlySummary = ({ transactions }) => {
  const currentMonth = new Date().getMonth();
  const filteredTransactions = transactions.filter((transaction) => {
    const transactionMonth = new Date(transaction.date).getMonth();
    return transactionMonth === currentMonth;
  });

  const income = filteredTransactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expense = filteredTransactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="monthly-summary-container">
      <h3>Monthly Summary</h3>
      <div className="summary">
        <div className="income-summary">
          <h4>Income</h4>
          <p className="plus">${income.toFixed(2)}</p>
        </div>
        <div className="expense-summary">
          <h4>Expense</h4>
          <p className="minus">${Math.abs(expense).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default MonthlySummary;
