import { useState } from "react";
import "./index.scss";
import Navbar from "./components/Navbar.jsx";
import TopCards from "./components/topcards.jsx";
import StockApexChart from "./components/stockGraph.jsx";
const App = () => {
  const [status, setStatus] = useState(true);
  const [search, setSearch] = useState("");
  return (
    <div
      className="app"
      style={{ backgroundColor: status ? "#434345" : "#f5f5f5" }}
    >
      <Navbar
        status={status}
        setStatus={setStatus}
        search={search}
        setSearch={setSearch}
      />
      <TopCards status={status} search={search} setSearch={setSearch} />
      <StockApexChart status={status} search={search} />
    </div>
  );
};

export default App;
