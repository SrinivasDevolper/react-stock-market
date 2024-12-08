import { useState } from "react";
import "./index.scss";
import Navbar from "./components/Navbar.jsx";
import TopCards from "./components/topcards.jsx";
import StockApexChart from "./components/stockGraph.jsx";
const App = () => {
  const [status, setStatus] = useState(true);
  const [search, setSearch] = useState("");
  return (
    <div className="app">
      <Navbar
        status={status}
        setStatus={setStatus}
        search={search}
        setSearch={setSearch}
      />
      <TopCards status={status} />
      <StockApexChart status={status} search={search} />
    </div>
  );
};

export default App;
