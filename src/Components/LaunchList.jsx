import React from "react";
import LaunchCard from "./LaunchCard";

const LaunchList = (props) => {
  return (
    <div className="px-2">
      <div className="flex flex-wrap">
        {props.launches &&
          props.launches.length > 0 &&
          props.launches.map((launch, key) => (
            <div
              key={key}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4"
            >
              <LaunchCard launch={launch} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default LaunchList;
