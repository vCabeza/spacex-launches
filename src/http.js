import axios from "axios";

export const fetchLaunchs = async (filter) => {
  let url = "https://api.spaceXdata.com/v3/launches?limit=100";
  if (filter.launch_success) url += "&launch_success=" + filter.launch_success;
  if (filter.land_success) url += "&land_success=" + filter.land_success;
  if (filter.launch_year) url += "&launch_year=" + filter.launch_year;

  return await axios.get(url);
};
