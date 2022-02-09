import { useRef, useEffect } from "react";
import "./style.css";
import submitAlerts from "../../utils/submitAlerts";

function DisplayAlerts({ alerts, address, newIndex, setNewIndex }) {
  const alertsContainer = useRef(null);
  const button = useRef(null);
  useEffect(() => {
    if (newIndex >= alerts.length) {
      button.current.disabled = true;
    }
  }, [alerts, newIndex]);

  return (
    <div className="alerts-section">
      <div className="container alertsHeader" style={{ padding: "0 1rem" }}>
        <h3 style={{ textAlign: "center", fontWeight: "300" }}>
          Current alerts for searched address:{" "}
        </h3>
        <p className="address">{address}</p>
      </div>
      <div ref={alertsContainer} className="container alertsContainer">
        {alerts.slice(0, newIndex)}
      </div>
      <div className="buttonsContainer">
        <button
          ref={button}
          className="loadMore"
          onClick={() => {
            if (newIndex < alerts.length) {
              if (newIndex + 5 < alerts.length) {
                setNewIndex(newIndex + 5);
              } else {
                setNewIndex(alerts.length);
              }
            }
          }}
        >
          Load More
        </button>
        <button onClick={() => submitAlerts(alertsContainer, address)}>
          Submit
        </button>
      </div>
    </div>
  );
}

function NoAlerts({}) {
  return <></>;
}

function Alerts({ alerts, address, valid, done, newIndex, setNewIndex }) {
  if (done) {
    if (Array.isArray(alerts)) {
      return <DisplayAlerts {...{ alerts, address, newIndex, setNewIndex }} />;
    } else if (valid) {
      return <NoAlerts />;
    } else {
      return <h1>invalid address {address}</h1>;
    }
  } else {
    return <h1>loading</h1>;
  }
}

export default Alerts;
