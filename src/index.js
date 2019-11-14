import React, { useState } from "react";
import ReactDOM from "react-dom";
import PracticeHooks from "./PracticeHooks";

import "./styles.css";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsHidden(true)}> hide</button>
      {!isHidden && <PracticeHooks />}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
