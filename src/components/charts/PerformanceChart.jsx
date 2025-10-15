import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title, } from "chart.js";
import { dashboardData } from "../../data/Data";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
);

const PerformanceChart = () => {
  return (
    <div className="chart-card">
      <h3>System Performance</h3>
      <Radar
        data={dashboardData.performance}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Performance KPIs" },
          },
          animation: {
            duration: 1500,
            easing: "easeInOutElastic",
          },
        }}
        height={300}
      />
    </div>
  );
};

export default PerformanceChart;
