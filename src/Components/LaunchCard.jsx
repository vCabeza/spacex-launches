import React from "react";

const LaunchCard = (props) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={props.launch.links.mission_patch}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {props.launch.mission_name}
          </div>
        </div>

        <div className="px-6 pt-4 pb-2">
          {props.launch.mission_id.length > 0 && (
            <div>
              <p>Missions Ids</p>
              {props.launch.mission_id.map((id) => (
                <span
                  key={id}
                  className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {id}
                </span>
              ))}
            </div>
          )}
          <p>Launch Year: {props.launch.launch_year}</p>
          <p>Succesful Launch: {props.launch.launch_success ? "Yes" : "No"}</p>
          <p>Seccesful Landing: {props.launch.launch_landing ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;
