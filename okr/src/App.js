import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./Components/List/List";

function App() {
  const url = "https://okrcentral.github.io/sample-okrs/db.json";
  const [okrData, setOkrData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        setOkrData(res.data);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header"> Objectives &amp; Key Results </header>
      {okrData.length > 0 && <List list={okrData} />}
    </div>
  );
}

export default App;
