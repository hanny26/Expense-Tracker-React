// src/components/Chart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Chart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ transactions }) => {
  const income = transactions.filter((item) => item.amount > 0).reduce((acc, item) => (acc += item.amount), 0);
  const expense = transactions.filter((item) => item.amount < 0).reduce((acc, item) => (acc += Math.abs(item.amount)), 0);

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: 'Income vs Expense',
        data: [income, expense],
        backgroundColor: ['#2ecc71', '#e74c3c'],
        borderColor: ['#27ae60', '#c0392b'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Income vs Expense</h3>
      <Pie data={data} />
    </div>
  );
};

export default Chart;
