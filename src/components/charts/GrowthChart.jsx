import React from "react";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend, Title, } from "chart.js";
import { dashboardData } from "../../data/Data";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Title);

const GrowthChart = () => {
  return (
    <div className="chart-card">
      <h3>Growth by Region</h3>
      <div style={{ height: "500px" }}>
        <PolarArea
          data={dashboardData.growth}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "bottom" },
              title: { display: true, text: "Regional Growth (%)" },
            },
            animation: {
              animateRotate: true,
              animateScale: true,
            },
          }}
          height={300}
        />
      </div>
    </div>
  );
};

export default GrowthChart;
