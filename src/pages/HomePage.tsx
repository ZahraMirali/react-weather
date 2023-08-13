import React from "react";
import WeatherList from "../components/WeatherList";
import CurrentWeather from "../components/CurrentWeather";
import styles from "./HomePage.module.css";
import RightOutlined from "@ant-design/icons/RightOutlined";
import { useSelector } from "react-redux";
import { Space } from "antd";
import { selectData } from "../store/weather/selectors";
import { EnvironmentOutlined } from "@ant-design/icons";

const HomePage: React.FC = () => {
  const weatherData = useSelector(selectData);
  if (!weatherData) return null;

  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      <div className={styles.location}>
        <EnvironmentOutlined className={styles.locationIcon} />
        {weatherData.location.name}, {weatherData.location.country}
      </div>
      <CurrentWeather
        data={weatherData.forecast.forecastday[0]}
        feelslike_c={weatherData.current.feelslike_c}
        pressure_mb={weatherData.current.pressure_mb}
      />
      <div className={styles.moreDetailBar}>
        <span className={styles.label6DaysForecast}>
          {weatherData.forecast.forecastday.length - 1} DAY FORECAST
        </span>
        <a href="/details" className={styles.link}>
          Go to Details <RightOutlined />
        </a>
      </div>
      <WeatherList data={weatherData.forecast.forecastday.slice(1)} />
    </Space>
  );
};

export default HomePage;
