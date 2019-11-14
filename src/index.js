import React from "react";
import ReactDOM from "react-dom";
import PracticeHooks from "./PracticeHooks";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <PracticeHooks />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
