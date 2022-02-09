function mapAlerts(alerts, setAlerts, address, status) {
  if (Array.isArray(alerts.alerts)) {
    const alertsHTML = [];
    for (var index in alerts.alerts) {
      const temp = [];
      let tempKey = 0;
      for (let key in alerts.alerts[index]) {
        tempKey++;
        if (key === "validator") {
          continue;
        }
        temp.push(
          <li key={tempKey}>
            {key} : {alerts.alerts[index][key]}
          </li>
        );
      }
      temp.push(
        <li
          className="validator"
          key={tempKey++}
          style={{
            fontSize: "1rem",
            wordWrap: "anywhere",
          }}
        >
          validator : {alerts.alerts[index]["validator"]}
        </li>
      );
      alertsHTML.push(
        <div key={index} className="alertsBox">
          <ul className="alertsList">{temp}</ul>
          <input type="checkbox" />
        </div>
      );
    }
    const output = {
      alerts: alertsHTML,
      address: address,
      done: true,
    };
    setAlerts(output);
  } else if (status === 200) {
    const output = { valid: true, address: address, done: true };
    setAlerts(output);
  } else {
    const output = { address: address, done: true };
    setAlerts(output);
  }
}

export default mapAlerts;
