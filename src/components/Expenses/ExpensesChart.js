import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Sunday", value: 0 },
    { label: "Monday", value: 0 },
    { label: "Tuesday", value: 0 },
    { label: "Wednesday", value: 0 },
    { label: "Thursday", value: 0 },
    { label: "Friday", value: 0 },
    { label: "Saturday", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseDay = expense.date.getDay();
    chartDataPoints[expenseDay].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
