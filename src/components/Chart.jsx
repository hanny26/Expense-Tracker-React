// src/components/Chart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = ({ transactions }) => {
  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [transactions.reduce((acc, transaction) => transaction.type === 'income' ? acc + transaction.amount : acc, 0),
        transactions.reduce((acc, transaction) => transaction.type === 'expense' ? acc + transaction.amount : acc, 0)],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (context.raw !== null) {
              label += ': $' + context.raw.toFixed(2);
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Expense vs Income</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
