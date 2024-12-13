import React, { useState, useEffect } from "react";
import stockGraph from "./smallCardLists";
const useStockCharts = () => {
  const [data, setData] = useState([]);
  const [table, setTable] = useState([]);
  useEffect(() => {
    setData(stockGraph);
  }, [data]);
  const handleTable = async () => {
    const response = await fetch(
      "https://api.twelvedata.com/symbol_search?symbol=GOOGL&apikey=907b7a322df94f81bb4c652c04a6383f"
    );
    const data = await response.json();
    setTable(data.data);
  };
  useEffect(() => {
    handleTable();
  }, []);
  return [data, setData, table, setTable];
};

export default useStockCharts;
