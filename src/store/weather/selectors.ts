export const selectWeatherData = (state: { weather: { weatherData: any } }) =>
  state.weather.weatherData;
export const selectLoading = (state: { weather: { loading: any } }) =>
  state.weather.loading;
export const selectError = (state: { weather: { error: any } }) =>
  state.weather.error;
