import React from "react";
import WeatherList from "../components/WeatherList";
import CurrentWeather from "../components/CurrentWeather";
import styles from "../components/WeatherCard.module.css";
import Typography from "antd/es/typography/Typography";
import RightOutlined from "@ant-design/icons/RightOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Space } from "antd";
import {
  selectWeatherData
} from "../store/weather/selectors";

const HomePage: React.FC = () => {
  const weatherData = useSelector(selectWeatherData);

  return (
    <Space direction="vertical">
      <Typography>
        {weatherData.location.name}, {weatherData.location.country}
      </Typography>
      <CurrentWeather data={weatherData.forecast.forecastday[0]} />
      <Space align="center">
        <Typography>6 DAY FORECAST</Typography>
        <Link to="/details" className={styles.link}>
          Go to Details <RightOutlined />
        </Link>
      </Space>
      <WeatherList data={weatherData.forecast.forecastday.slice(1)} />
    </Space>
  );
};

export default HomePage;
