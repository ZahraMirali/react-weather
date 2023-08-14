import React from "react";
import { Space } from "antd";
import { useSelector } from "react-redux";
import { selectData } from "../../store/weather/selectors";
import WeatherDetail from "../../components/WeatherDetail";

const WeatherDetailsPage: React.FC = () => {
  const weatherData = useSelector(selectData);
  if (!weatherData) return null;

  const data = weatherData.forecast.forecastday;

  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      {data.map(({ date, day }) => (
        <WeatherDetail key={date} day={day} date={date} />
      ))}
    </Space>
  );
};

export default WeatherDetailsPage;
