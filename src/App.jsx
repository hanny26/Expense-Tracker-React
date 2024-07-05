// src/App.jsx
import React, { useState } from 'react';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import ExpenseList from './components/ExpenseList';
import Login from './components/Login';
import Filter from './components/Filter';
import MonthlySummary from './components/MonthlySummary';
import Chart from './components/Chart';
import { useUser } from './context/UserContext';
import './App.css';

const App = () => {
  const { user, logout } = useUser();
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  if (!user) return <Login />;

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: transactions.length + 1 }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const filterTransactions = ({ text, category }) => {
    setFilteredTransactions(
      transactions.filter((transaction) => {
        return (
          (text ? transaction.text.toLowerCase().includes(text.toLowerCase()) : true) &&
          (category ? transaction.category.toLowerCase().includes(category.toLowerCase()) : true)
        );
      })
    );
  };

  return (
    <div className="container">
      <header>
        <h2>Expense Tracker</h2>
        <button onClick={logout}>Logout</button>
      </header>
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <MonthlySummary transactions={transactions} />
      <Filter onFilter={filterTransactions} />
      <ExpenseList transactions={filteredTransactions} onDelete={deleteTransaction} />
      <AddTransaction onAdd={addTransaction} />
      <Chart transactions={transactions} />
    </div>
  );
};

export default App;
