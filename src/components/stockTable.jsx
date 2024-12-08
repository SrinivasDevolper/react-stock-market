import { useEffect, useState } from "react";
const apiConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  progress: "PROGRESS",
  failure: "FAILURE",
};
const StockTable = ({ status, search }) => {
  const [tableDataStatus, setTableDataStatus] = useState({
    tableData: [],
    switchStatus: apiConstants.initial,
    failure: "",
  });
  const searchFetchData = async () => {
    try {
      setTableDataStatus({
        tableData: [],
        switchStatus: apiConstants.progress,
        failure: "",
      });
      const response = await fetch(
        `https://api.twelvedata.com/symbol_search?symbol=${search}&apikey=907b7a322df94f81bb4c652c04a6383f`
      );
      const data = await response.json();
      if (data.status == "ok") {
        if (data.data.length !== 1) {
          const currentStockData = data.data.map((eachItem) => ({
            symbol: eachItem.symbol,
            instrumentName: eachItem.instrument_name,
            country: eachItem.country,
            currency: eachItem.currency,
          }));
          setTableDataStatus({
            tableData: currentStockData,
            switchStatus: apiConstants.success,
            failure: "",
          });
        } else {
          throw Error("No Data Found");
        }
      }
    } catch (e) {
      setTableDataStatus({
        tableData: [],
        switchStatus: apiConstants.failure,
        failure: e.message || "Something is Error Try Again",
      });
    }
  };
  useEffect(() => {
    searchFetchData();
  }, [search]);
  const progress = () => <div>Loading....</div>;
  const success = () => {
    return (
      <div className="table-scroll-container">
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Country</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {tableDataStatus.tableData.map((eachStock, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: status
                    ? index % 2 === 0
                      ? "#18191B"
                      : "#1E1F21"
                    : index % 2 === 0
                    ? "#D1D1D1"
                    : "#E8E8E8",
                }}
              >
                <td>{eachStock.symbol}</td>
                <td>{eachStock.instrumentName}</td>
                <td>{eachStock.country}</td>
                <td>{eachStock.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  const failure = () => <div>{tableDataStatus.failure}</div>;
  const switchCaseData = () => {
    switch (tableDataStatus.switchStatus) {
      case "PROGRESS":
        return progress();
        break;
      case "SUCCESS":
        return success();
        break;
      case "FAILURE":
        return failure();
        break;
    }
  };
  return <>{switchCaseData()}</>;
};

export default StockTable;
