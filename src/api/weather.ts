import axios from "axios";
import { FORECAST_URL } from "../constants/urls";

export const getForecast = (q: string) => {
  return axios.get(FORECAST_URL, {
    params: {
      q,
      days: 8,
    },
  });
};
