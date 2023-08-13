import React from "react";
import WeatherList from "../components/WeatherList";
import CurrentWeather from "../components/CurrentWeather";
import styles from "./HomePage.module.css";
import RightOutlined from "@ant-design/icons/RightOutlined";
import { useSelector } from "react-redux";
import { selectData } from "../store/weather/selectors";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const weatherData = useSelector(selectData);
  if (!weatherData) return null;

  return (
    <div>
      <CurrentWeather
        data={weatherData.forecast.forecastday[0]}
        feelslike_c={weatherData.current.feelslike_c}
        pressure_mb={weatherData.current.pressure_mb}
      />
      <div className={styles.moreDetailBar}>
        <span className={styles.labelDaysForecast}>
          {weatherData.forecast.forecastday.length - 1} DAY FORECAST
        </span>
        <Link to="/details" className={styles.link}>
          Go to Details <RightOutlined />
        </Link>
      </div>
      <WeatherList data={weatherData.forecast.forecastday.slice(1)} />
    </div>
  );
};

export default HomePage;
