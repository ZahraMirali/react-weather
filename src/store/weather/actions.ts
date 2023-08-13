import { SET_WEATHER_DATA, SET_LOADING, SET_ERROR } from "./types";

export const setWeatherData = (data: any) => ({
  type: SET_WEATHER_DATA,
  payload: data,
});

export const setLoading = (loading: any) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error: any) => ({
  type: SET_ERROR,
  payload: error,
});
