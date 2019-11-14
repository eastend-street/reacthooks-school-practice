import React, { useState } from "react";

const PracticeHooks = () => {
  const [practiced, setPracticed] = useState(true);

  return (
    <div>
      {practiced ? "I practiced hooks" : "I did not practice Hooks"}
      <button onClick={() => setPracticed(!practiced)}>Switch</button>
    </div>
  );
};

export default PracticeHooks;
