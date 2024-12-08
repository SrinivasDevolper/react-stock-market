import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
import stockGraph from "../Apis/smallCardLists";
import StockTable from "./stockTable";

const StockCandleChart = ({ status, search }) => {
  const [data, setData] = useState([]);
  const [table, setTable] = useState([]);
  useEffect(() => {
    setData(stockGraph);
  }, [data]);
  const handleTable = async () => {
    const response = await fetch(
      "https://api.twelvedata.com/symbol_search?symbol=AAPL&apikey=907b7a322df94f81bb4c652c04a6383f"
    );
    const data = await response.json();
    setTable(data.data);
  };
  useEffect(() => {
    handleTable();
  }, []);
  //   const [prices, setPrices] = useState([]);
  //   useEffect(() => {
  //     setPrices(data);
  //   }, []);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setPrices((prevPrices) =>
  //         prevPrices.map((item) => ({
  //           ...item,
  //           high: parseFloat(item.high) + 10,
  //           loss: parseFloat(item.low) + 10,
  //         }))
  //       );
  //     }, 1000);

  //     // return () => clearInterval(interval);
  //   }, []);
  return (
    <div
      className="middle-stock-cont"
      style={{ backgroundColor: status ? "#434345" : "#f5f5f5" }}
    >
      <div
        className="candle-stock-cont"
        style={{ backgroundColor: status ? "#28292B" : "#D1D1D1" }}
      >
        <h2>Candlestick Stock Chart</h2>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="high"
              fill="#24FF50"
              minPointSize={5}
              barSize={10}
              label={{ position: "top" }}
            />
            <Bar
              dataKey="low"
              fill="#F22424"
              minPointSize={5}
              barSize={10}
              label={{ position: "bottom" }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div
        className="table-stock-cont"
        style={{
          backgroundColor: status ? "#28292B" : "#D1D1D1",
          borderRadius: "5px",
        }}
      >
        <h1>Stock Data Table</h1>
        <StockTable status={status} search={search} />
      </div>
    </div>
  );
};

export default StockCandleChart;
