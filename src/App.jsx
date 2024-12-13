import { useState } from "react";
import "./index.scss";
import Navbar from "./components/Navbar.jsx";
import TopCards from "./components/topcards.jsx";
import StockApexChart from "./components/stockGraph.jsx";
import GithubLogo from "../public/Githublogo.png";
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
      <div
        style={{
          marginLeft: "2rem",
          marginRight: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div class="tooltip">
          <a href="https://www.linkedin.com/in/srinivasdov/" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
              alt="linkdin link"
              width="40"
            />
          </a>
          <span class="tooltiptext">Linkdin text</span>
        </div>
        <div class="tooltip">
          <a href="https://github.com/SrinivasDevolper" target="_blank">
            <img src={GithubLogo} alt="Github link" width="40" />
          </a>
          <span class="tooltiptext">Github text</span>
        </div>
      </div>
    </div>
  );
};

export default App;
