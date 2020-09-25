import React from "react";
import "./styles.css";
import AnalyticChartWidget from "./components/AnalyticChartWidget";

export default function App() {
  return (
    <div className="App">
      <AnalyticChartWidget />
      <h1>Hello CodeSandbox</h1>
      <dic id="container"></dic>
    </div>
  );
}
