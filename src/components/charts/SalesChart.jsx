import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, } from "chart.js";
import { dashboardData } from "../../data/Data";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = () => {
  return (
    <div className="chart-card">
      <h3>Sales Overview</h3>
      <div style={{ height: "500px" }}>
        <Line
          data={dashboardData.sales}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: { bottom: 30 }, // neeche space de diya
            },
            plugins: {
              legend: { position: "bottom" },
              title: { display: true, text: "Monthly Sales (2024 vs 2025)" },
            },
            animation: {
              duration: 1200,
              easing: "easeInOutQuart",
            },
          }}
        />
      </div>
    </div>
  );
};

export default SalesChart;
