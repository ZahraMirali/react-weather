import axios, { AxiosResponse } from "axios";
import { SEARCH_URL } from "../constants/urls";
import { LocationInfo } from "../types/location";

export const getLocations = (
  q: string
): Promise<AxiosResponse<LocationInfo[]>> => {
  return axios.get(SEARCH_URL, { params: { q } });
};
