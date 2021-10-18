import React from "react";

const LaunchFilters = (props) => {
  return (
    <div className="flex flex-wrap bg-gray-100 w-auto h-auto">
      <div className="bg-white rounded p-3 shadow-lg">
        <div>
          <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
            Filters
          </h4>
        </div>
        <ul className="space-y-2 text-md">
          <li>
            <span className="text-gray-700 font-medium">Launch Year</span>
          </li>
          <li className="flex flex-wrap">
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2006 })
                }
                type="radio"
                value="2006"
                id="2006"
                name="year"
              />{" "}
              2006{" "}
            </label>
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2007 })
                }
                type="radio"
                value="2007"
                id="2007"
                name="year"
              />{" "}
              2007{" "}
            </label>
          </li>
          <li className="flex flex-wrap">
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2008 })
                }
                type="radio"
                value="2008"
                id="2008"
                name="year"
              />{" "}
              2008{" "}
            </label>
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2009 })
                }
                type="radio"
                value="2009"
                id="2009"
                name="year"
              />{" "}
              2009{" "}
            </label>
          </li>
          <li className="flex flex-wrap">
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2010 })
                }
                type="radio"
                value="2010"
                id="2010"
                name="year"
              />{" "}
              2010{" "}
            </label>
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2011 })
                }
                type="radio"
                value="2011"
                id="2011"
                name="year"
              />{" "}
              2011{" "}
            </label>
          </li>
          <li className="flex flex-wrap">
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2012 })
                }
                type="radio"
                value="2012"
                id="2012"
                name="year"
              />{" "}
              2012{" "}
            </label>
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2013 })
                }
                type="radio"
                value="2013"
                id="2013"
                name="year"
              />{" "}
              2013{" "}
            </label>
          </li>
          <li className="flex flex-wrap">
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2014 })
                }
                type="radio"
                value="2014"
                id="2014"
                name="year"
              />{" "}
              2014{" "}
            </label>
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2015 })
                }
                type="radio"
                value="2015"
                id="2015"
                name="year"
              />{" "}
              2015{" "}
            </label>
          </li>
          <li className="flex flex-wrap">
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2016 })
                }
                type="radio"
                value="2016"
                id="2016"
                name="year"
              />{" "}
              2016{" "}
            </label>
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2017 })
                }
                type="radio"
                value="2017"
                id="2017"
                name="year"
              />{" "}
              2017{" "}
            </label>
          </li>
          <li className="flex flex-wrap">
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2018 })
                }
                type="radio"
                value="2018"
                id="2018"
                name="year"
              />{" "}
              2018{" "}
            </label>
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2019 })
                }
                type="radio"
                value="2019"
                id="2019"
                name="year"
              />{" "}
              2019{" "}
            </label>
          </li>
          <li className="flex flex-wrap">
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: 2020 })
                }
                type="radio"
                value="2020"
                id="2020"
                name="year"
              />{" "}
              2020{" "}
            </label>
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_year: null })
                }
                type="radio"
                value="all"
                id="all"
                name="year"
              />{" "}
              All{" "}
            </label>
          </li>
          <li>
            <span className="text-gray-700 font-medium">Successful Launch</span>
          </li>
          <li className="flex flex-wrap">
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_success: true })
                }
                type="radio"
                value="yes"
                id="yes"
                name="launch"
              />{" "}
              Yes{" "}
            </label>
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, launch_success: false })
                }
                type="radio"
                value="no"
                id="no"
                name="launch"
              />{" "}
              No{" "}
            </label>
          </li>
          <li>
            <span className="text-gray-700 font-medium">
              Successful Landing
            </span>
          </li>
          <li className="flex flex-wrap">
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, land_success: true })
                }
                type="radio"
                value="yes"
                id="yes"
                name="landing"
              />{" "}
              Yes{" "}
            </label>
            <label className="w-1/2 text-gray-700  rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <input
                onChange={() =>
                  props.setFilter({ ...props.filter, land_success: false })
                }
                type="radio"
                value="no"
                id="no"
                name="landing"
              />{" "}
              No{" "}
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LaunchFilters;
