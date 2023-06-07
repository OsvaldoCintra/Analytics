import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ReactGA from "react-ga4";
import config from "./abitab-google-analytics/config/config";
import { analyticEvent } from "./abitab-google-analytics/components/AnalyticEvent";

function App() {
  ReactGA.initialize(config.GOOGLE.GOOGLE_ANALYTICS_ID);

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            onClick={() => analyticEvent("Pago", "web")}
          />
        </a>
      </div>
      <h1>React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
