import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, } from "chart.js";
import { dashboardData } from "../../data/Data";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ActiveUsersChart = () => {
  return (
    <div className="chart-card">
      <h3>Active Users</h3>
      <div style={{ height: "500px", width: "100%" }}>
      <Bar
        data={dashboardData.activeUsers}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "bottom" },
            title: { display: true, text: "Users & Signups This Week" },
          },
          animation: {
            duration: 1000,
            easing: "easeOutBounce",
          },
        }}
        height={300}
      />
      </div>
    </div>
  );
};

export default ActiveUsersChart;
