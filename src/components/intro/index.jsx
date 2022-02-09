import "./style.css";

function Intro() {
  return (
    <div className="intro">
      <div className="container">
        <h2>
          Alerts are generated for the following changes to your validator set:
        </h2>
        <ul>
          <li>Staked validator uptime percentage falls by &gt; 0.25% </li>
          <li>Staked validator node runner deregisters their validator</li>
          <li>Staked validator fee increases by any amount</li>
        </ul>
      </div>
      <div className="container">
        <h3>To enable Alerts:</h3>
        <ol>
          <li>Open the Telegram Bot here @RadixPortfolioAlerts</li>
          <li>
            Send /start to this bot to retrieve a link to add your address for
            monitoring
          </li>
          <li>Click the link provided by the bot to register your address</li>
        </ol>
      </div>
    </div>
  );
}

export default Intro;
