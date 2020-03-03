import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

// Create child Statcard component here

function StatCard({ icon, name, number }) {
  return (
    <div className="stat-card">
      <div className="stat-line">
        <span>{icon}</span>
        <strong>{name}</strong>
      </div>
      <p>{number.toLocaleString()}</p>
    </div>
  );
  // define component here
  // define props of icon label and number
}

function App() {
  return (
    <div className="App">
      <h2>Use components and props in React</h2>
      {/* Use child component x4 here */}
      <StatCard icon="#" name="HastTag" number={3000} />
      <StatCard icon="@" name="At the rate" number={5000} />
      <StatCard icon="+" name="Plus" number={1000} />
      <StatCard icon="-" name="Minus" number={8000} />
      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
