import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, } from "chart.js";
import { dashboardData } from "../../data/Data";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const RevenueChart = () => {
  return (
    <div className="chart-card">
      <h3>Revenue Distribution</h3>
      <Doughnut
        data={dashboardData.revenue}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "right" },
            title: { display: true, text: "Revenue Share by Category" },
          },
          animation: {
            animateScale: true,
            animateRotate: true,
          },
        }}
        height={300}
      />
    </div>
  );
};

export default RevenueChart;
