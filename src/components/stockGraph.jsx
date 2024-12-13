import React from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
import StockTable from "./stockTable";
import useStockCharts from "../Apis/useStockCharts";
import StockChart from "./StockChart.jsx";
import PieChart from "./pieChart.jsx";

const StockCandleChart = ({ status, search }) => {
  const [data] = useStockCharts();
  return (
    <>
      <div
        className="middle-stock-cont"
        style={{ backgroundColor: status ? "#434345" : "#f5f5f5" }}
      >
        <div
          className="candle-stock-cont"
          style={{
            backgroundColor: status ? "#28292B" : "#D1D1D1",
            borderRadius: "5px",
          }}
        >
          <h1
            style={{ color: status ? "#EBECEC" : "#19191B", fontSize: "22px" }}
          >
            Pie Chart Stock Data
          </h1>
          <StockChart />
        </div>
        <div
          className="table-stock-cont"
          style={{
            backgroundColor: status ? "#28292B" : "#D1D1D1",
            borderRadius: "5px",
          }}
        >
          <h1 style={{ color: status ? "#EBECEC" : "#19191B" }}>
            Stock Data Table
          </h1>
          <StockTable status={status} search={search} />
        </div>
      </div>
      <div
        className="middle-stock-cont"
        style={{ backgroundColor: status ? "#434345" : "#f5f5f5" }}
      >
        <div
          className="candle-stock-cont"
          style={{
            backgroundColor: status ? "#28292B" : "#D1D1D1",
          }}
        >
          <h2 style={{ color: status ? "#EBECEC" : "#19191B" }}>
            Bargraph Stock Chart
          </h2>
          <ResponsiveContainer width="100%" height="80%">
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
                height="100%"
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
          <h1 style={{ color: status ? "#EBECEC" : "#19191B" }}>
            Pie Chart Stock Data
          </h1>
          <PieChart />
        </div>
      </div>
    </>
  );
};

export default StockCandleChart;
