import React from "react";

const LaunchFilters = (props) => {
  return (
    <div className="flex flex-wrap bg-gray-100 w-full h-auto">
      <div className="bg-white rounded p-3 shadow-lg">
        <div className="flex items-center space-x-4 p-2 mb-5">
          <div>
            <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
              Filters
            </h4>
          </div>
        </div>
        <ul className="space-y-2 text-md">
          <li>
            <span className="flex items-center space-x-3 text-gray-700 p-2 font-medium">
              Launch Year
            </span>
          </li>
          <li className="flex justify-center">
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2006 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2006
            </a>
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2007 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2007
            </a>
          </li>
          <li className="flex justify-center">
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2008 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2008
            </a>
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2009 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2009
            </a>
          </li>
          <li className="flex justify-center">
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2010 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2010
            </a>
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2011 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2011
            </a>
          </li>
          <li className="flex justify-center">
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2012 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2012
            </a>
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2013 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2013
            </a>
          </li>
          <li className="flex justify-center">
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2014 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2014
            </a>
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2015 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2015
            </a>
          </li>
          <li className="flex justify-center">
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2016 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2016
            </a>
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2017 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2017
            </a>
          </li>
          <li className="flex justify-center">
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2018 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2018
            </a>
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2019 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2019
            </a>
          </li>
          <li className="flex justify-center">
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2020 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2020
            </a>
            <a
              href="#"
              onClick={() =>
                props.setFilter({ ...props.filter, launch_year: 2021 })
              }
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              2021
            </a>
          </li>
          <li>
            <span className="flex items-center space-x-3 text-gray-700 p-2 font-medium">
              Succesful Launch
            </span>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              Yes
            </a>
            <a
              href="#"
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              No
            </a>
          </li>
          <li>
            <span className="flex items-center space-x-3 text-gray-700 p-2 font-medium">
              Succesful Landing
            </span>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              Yes
            </a>
            <a
              href="#"
              className="text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              No
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LaunchFilters;
