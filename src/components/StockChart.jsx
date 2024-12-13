import React from "react";
import ReactApexChart from "react-apexcharts";
import smallCardLists from "../Apis/smallCardLists";
const CandleChart = () => {
  console.log(parseInt(smallCardLists[0].high));
  const series = [
    {
      data: [
        { x: new Date("2024-12-02").getTime(), y: [200, 310, 170, 300] },
        { x: new Date("2024-12-01").getTime(), y: [242, 244, 242, 150] },
        { x: new Date("2024-12-03").getTime(), y: [300, 300, 400, 200] },
        { x: new Date("2024-12-04").getTime(), y: [200, 310, 170, 300] },
      ],
    },
  ];

  const options = {
    chart: { type: "candlestick", height: 350 },
    title: { text: "Stock Candlestick Chart", align: "center" },
    xaxis: { type: "datetime", title: { text: "Date" } },
    yaxis: { title: { text: "Price (USD)" } },
    tooltip: {
      enabled: true,
      shared: true,
      y: {
        formatter: (value) => `$${value.toFixed(2)}`,
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="candlestick"
      height="90%"
      style={{ height: "75vh" }}
    />
  );
};

export default CandleChart;
