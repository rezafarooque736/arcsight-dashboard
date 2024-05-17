"use client";

import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const BarGraph = ({ graphData, graphLabel, id }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = chartRef.current;

    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = document.getElementById(`myChart-${id}`).getContext("2d");

    if (ctx) {
      chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: graphLabel,
          datasets: [
            {
              data: graphData,
              backgroundColor: [
                "rgba(134,25,413, 0.4)",
                "rgba(6,95,70, 0.4)",
                "rgba(185,28,28, 0.4)",
                "rgba(202,138,4,0.4)",
                "rgba(146,64,14, 0.4)",
                "rgba(29,78,216,0.4)",
                "rgba(21,128,61,0.4)",
                "rgba(159,19,57, 0.4)",
                "rgba(17,94,89,0.4)",
                "rgba(51,65,85,0.4)",
                "rgba(101,163,13,0.4)",
              ],
              borderColor: [
                "rgba(134,25,413, 1)",
                "rgba(6,95,70, 1)",
                "rgba(185,28,28, 1)",
                "rgba(202,138,4,1)",
                "rgba(146,64,14, 1)",
                "rgba(29,78,216, 1)",
                "rgba(21,128,61,1)",
                "rgba(159,19,57, 1)",
                "rgba(17,94,89,1)",
                "rgba(51,65,85,1)",
                "rgba(101,163,13, 1)",
              ],
              borderWidth: 1,
              borderRadius: 9,
              minBarLength: 3,
              // categoryPercentage: 1,
              // barPercentage: 0.9,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          responsive: true,
          indexAxis: "y",
          scales: {
            x: {
              // type: "category",
              position: "top",
              // labels: ["a", "b", "c", "d"],
            },
            y: {
              beginAtZero: true,
              display: false,
            },
          },
        },
      });
      chartRef.current = chartInstance;
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [graphData, graphLabel, id]);

  return (
    <div className="relative w-full">
      <canvas id={`myChart-${id}`} className="max-h-full"></canvas>
    </div>
  );
};

export default BarGraph;
