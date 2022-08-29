import "./App.css";
import React, { useState } from "react";

function App() {
  const [kurs, setKurs] = useState(0);
  const setval = (e) => {
    setKurs(e);
    //kj
  };
  const getKurs = (url) => {
    fetch(url)
      .then((response) => response.json())
      // .then((result) => alert());
      .then((result) => console.log(JSON.stringify(result, null, 2)));
    // return response;
  };

  getKurs(
    "https://api.privatbank.ua/p24api/exchange_rates?json&date=27.08.2022"
  );
  // console.log(actual);

  return (
    <div className="App">
      <div className="left">
        <input
          type="number"
          value={kurs}
          onChange={(e) => setval(e.target.value)}
        />
        <br />
        <select name="" id="">
          <option value="1">USD</option>
          <option value="1">EUR</option>
        </select>
      </div>
      <div className="right">
        <input type="text" />
        <br />
        <select name="" id="">
          <option value="1">USD</option>
          <option value="1">EUR</option>
        </select>
      </div>
    </div>
  );
}

export default App;
