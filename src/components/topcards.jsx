import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import smallCardList from "../Apis/smallCardLists";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";

const apiConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  progress: "PROGRESS",
};
const TopCards = ({ status }) => {
  const [liveStatusData, setLiveStatusData] = useState({
    liveData: [],
    switchStatus: apiConstants.initial,
  });

  const fetchingData = async () => {
    const api = `https://api.twelvedata.com/quote?symbol=AAPL,GOOGL,MSFT,NFLX&apikey=907b7a322df94f81bb4c652c04a6383f`;
    let dataList;
    setLiveStatusData({
      ...liveStatusData,
      liveData: [],
      switchStatus: apiConstants.progress,
    });
    try {
      const response = await fetch(api);
      const data = await response.json();
      const { AAPL, GOOGL, MSFT, NFLX } = data;
      const AAPLOBJ = {
        symbol: AAPL.symbol,
        high: AAPL.high,
        low: AAPL.low,
        averageVolume: AAPL.average_volume,
        imageUrl:
          "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
      };
      const GOOGLOBJ = {
        symbol: GOOGL.symbol,
        high: GOOGL.high,
        low: GOOGL.low,
        averageVolume: GOOGL.average_volume,
        imageUrl:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-black-icon.png",
      };
      const MSFTOBJ = {
        symbol: MSFT.symbol,
        high: MSFT.high,
        low: MSFT.low,
        averageVolume: MSFT.average_volume,
        imageUrl:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-black-icon.png",
      };
      const NFLXOBJ = {
        symbol: NFLX.symbol,
        high: NFLX.high,
        low: NFLX.low,
        averageVolume: NFLX.average_volume,
        imageUrl:
          "https://cdn.iconscout.com/icon/free/png-256/free-netflix-logo-icon-download-in-svg-png-gif-file-formats--stream-movie-brands-and-logos-pack-icons-2673873.png?f=webp&w=256",
      };
      dataList = [AAPLOBJ, GOOGLOBJ, MSFTOBJ, NFLXOBJ];
      setLiveStatusData({
        ...liveStatusData,
        liveData: dataList,
        switchStatus: apiConstants.success,
      });
    } catch (e) {
      dataList = smallCardList.map((eachItem) => ({
        symbol: eachItem.symbol,
        high: parseInt(eachItem.high),
        low: parseInt(eachItem.low),
        averageVolume: eachItem.average_volume,
        imageUrl: eachItem.imageUrl,
      }));
      setLiveStatusData({
        ...liveStatusData,
        liveData: dataList,
        switchStatus: apiConstants.success,
      });
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    setPrices(
      liveStatusData.liveData.map((data) => ({
        symbol: data.symbol,
        profit: data.high,
        loss: data.low,
        imageUrl: data.imageUrl,
      }))
    );
  }, [liveStatusData]);
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prevPrices) =>
        prevPrices.map((item) => ({
          ...item,
          profit: parseInt(item.profit + 27),
          loss: parseInt(item.loss + 27),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const progress = () => (
    <div>
      <Audio
        height="80"
        width="80"
        radius="9"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
        style={{ color: "#24FC53" }}
      />
    </div>
  );
  const success = () => {
    return (
      <ul>
        {prices.map((eachData, index) => (
          <li
            key={eachData.symbol}
            style={{
              backgroundColor: status ? "#28292b" : "#d1d1d1",
            }}
          >
            <div className="title-cont">
              <img src={eachData.imageUrl} alt={eachData.symbol} />
              <div>
                <h1
                  style={{
                    color: status ? "#ebecec" : "#252626",
                  }}
                >
                  {eachData.symbol}
                </h1>
                <p style={{ color: status ? "#ebecec" : "#252626" }}>USD</p>
              </div>
            </div>
            <div>
              <SlGraph
                style={{
                  color: index % 2 === 0 ? "#13e800" : "#e80000",
                  fontSize: "3rem",
                  transform: index % 2 === 0 ? "scaleX(1)" : "scaleX(-1)",
                }}
              />
            </div>
            <div className="content">
              <h2
                className="profit"
                style={{ color: status ? "#24ff57" : "#00E03C" }}
              >
                {eachData.profit}
                <BiSolidUpArrowCircle style={{ color: "#00e03c" }} />
              </h2>
              <h2>
                -{eachData.loss}
                <FaArrowAltCircleDown style={{ color: "#d41908" }} />
              </h2>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  const switchCaseData = () => {
    switch (liveStatusData.switchStatus) {
      case "PROGRESS":
        console.log("PROGRESS...");
        return progress();
        break;
      case "SUCCESS":
        return success();
        break;
    }
  };
  return (
    <div
      className="small-card-container-list"
      style={{ backgroundColor: status ? "#434345" : "#f5f5f5" }}
    >
      {switchCaseData()}
    </div>
  );
};

export default TopCards;
