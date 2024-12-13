import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const options = {
    labels: ["AAPL", "GOOGL", "MSFT", "NFLX"],
    title: { text: "Stock Market Share" },
  };

  const series = [40, 30, 20, 10];

  return (
    <ReactApexChart options={options} series={series} type="pie" height="80%" />
  );
};

export default PieChart;
