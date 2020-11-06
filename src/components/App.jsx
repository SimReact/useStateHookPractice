import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function Time() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(Time, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={Time}>Get Time</button>
    </div>
  );
}

export default App;
