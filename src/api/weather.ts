import axios from "axios";
import { FORECAST_URL } from "../constants/urls";

export const getForecast = (q: string, days: number = 8) => {
  return axios.get(FORECAST_URL, {
    params: {
      q,
      days,
    },
  });
};
