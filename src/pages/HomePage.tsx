import React from "react";
import WeatherList from "../components/WeatherList";
import CurrentWeather from "../components/CurrentWeather";
import styles from "../components/WeatherCard.module.css";
import Typography from "antd/es/typography/Typography";
import RightOutlined from "@ant-design/icons/RightOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Space } from "antd";
import { selectData } from "../store/weather/selectors";

const HomePage: React.FC = () => {
  const weatherData = useSelector(selectData);
  if (!weatherData) return null;

  return (
    <Space direction="vertical">
      <Typography>
        {weatherData.location.name}, {weatherData.location.country}
      </Typography>
      <CurrentWeather
        data={weatherData.forecast.forecastday[0]}
        feelslike_c={weatherData.current.feelslike_c}
        pressure_mb={weatherData.current.pressure_mb}
      />
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
