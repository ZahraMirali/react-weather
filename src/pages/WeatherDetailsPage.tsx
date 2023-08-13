import React from "react";
import {
  selectWeatherData,

} from "../store/weather/selectors";
import { Space, Typography } from "antd";
import { useSelector } from "react-redux";
import WeatherList from "../components/WeatherList";
import CurrentWeather from "../components/CurrentWeather";

const WeatherDetailsPage: React.FC = () => {
  const weatherData = useSelector(selectWeatherData);

  return (
    <Space direction="vertical">
      <Typography>
        {weatherData.location.name}, {weatherData.location.country} Detail
      </Typography>
      <CurrentWeather data={weatherData.forecast.forecastday[0]} />
      <Space align="center">
        <Typography>6 DAY FORECAST</Typography>
      </Space>
      <WeatherList data={weatherData.forecast.forecastday.slice(1)} />
    </Space>
  );
};

export default WeatherDetailsPage;
