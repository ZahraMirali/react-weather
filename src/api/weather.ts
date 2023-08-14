import axios, { AxiosResponse } from "axios";
import { FORECAST_URL } from "../constants/urls";
import { WeatherData } from "../types/weather";

export const getForecast = (
  q: string,
  days: number = 8
): Promise<AxiosResponse<WeatherData>> => {
  return axios.get(FORECAST_URL, {
    params: {
      q,
      days,
    },
  });
};
