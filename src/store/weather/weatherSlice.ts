import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getForecast } from "../../api/weather";

export interface WeatherState {
  data: any;
  loading: boolean;
  error?: string;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: undefined,
};

export const fetchForecastWeather = createAsyncThunk(
  "weather/fetchForecastWeather",
  async (q: string) => {
    const response = await getForecast(q);
    return response.data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecastWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchForecastWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchForecastWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
