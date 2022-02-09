import { useState } from "react";
import Intro from "./components/intro";
import Alerts from "./components/alerts";
import Nav from "./components/nav";
import "./App.css";

function App() {
  const [alerts, setAlerts] = useState(null);
  const [switchPage, setSwitchPage] = useState(false);
  const [newIndex, setNewIndex] = useState(4);

  return (
    <div className="main">
      <Nav {...{ setAlerts, setSwitchPage, setNewIndex }} />
      {switchPage ? (
        <Alerts {...alerts} {...{ newIndex, setNewIndex }} />
      ) : (
        <Intro />
      )}
    </div>
  );
}

export default App;
