import React from "react";
import { useSelector } from "react-redux";
import { Card, Typography } from "antd";

const WeatherDetails: React.FC = () => {
  const weatherData = useSelector((state: any) => state.weatherData);

  if (!weatherData) {
    return null;
  }

  const { city, date, conditions, windSpeed, pressure, weatherIconUrl } =
    weatherData;

  return (
    <Card>
      <div>
        <img src={weatherIconUrl} alt="Weather Icon" />
      </div>
      <Typography.Title level={4}>{city}</Typography.Title>
      <Typography.Text>Date: {date}</Typography.Text>
      <Typography.Text>Conditions: {conditions}</Typography.Text>
      <Typography.Text>Wind Speed: {windSpeed} km/h</Typography.Text>
      <Typography.Text>Pressure: {pressure} mb</Typography.Text>
    </Card>
  );
};

export default WeatherDetails;
