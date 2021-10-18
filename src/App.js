import React, { useState, useEffect } from "react";
import LaunchFilters from "./Components/LaunchFilters";
import LaunchList from "./Components/LaunchList";
import { fetchLaunchs } from "./http";

function App() {
  const [launches, setLaunches] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    fetchLaunchs(filter).then((response) => {
      setLaunches(response.data);
    });
  }, [filter]);

  return (
    <div id="App">
      <h1 className="font-semibold tracking-tight text-4xl p-4">
        SpaceX Launch Program
      </h1>
      <div className="flex mb-4">
        <div className="w-full max-w-max min-w-max">
          <LaunchFilters filter={filter} setFilter={setFilter} />
        </div>
        {launches.length > 0 ? (
          <div>
            <LaunchList launches={launches} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
