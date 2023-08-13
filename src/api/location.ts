import axios from "axios";
import { SEARCH_URL } from "../constants/urls";

export const getLocations = (q: string) => {
  return axios.get(SEARCH_URL, { params: { q } });
};
