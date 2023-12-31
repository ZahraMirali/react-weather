import React from "react";
import WeatherList from "../../components/WeatherList";
import CurrentWeather from "../../components/CurrentWeather";
import styles from "./Home.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectData } from "../../store/weather/selectors";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const weatherData = useSelector(selectData);
  if (!weatherData) return null;

  const today = weatherData.forecast.forecastday[0];

  return (
    <div>
      <CurrentWeather
        date={today.date}
        feelslike={weatherData.current.feelslike_c}
        pressure={weatherData.current.pressure_mb}
        conditionText={today.day.condition.text}
        conditionIcon={today.day.condition.icon}
        avgTemp={today.day.avgtemp_c}
        maxWind={today.day.maxwind_kph}
        avgHumidity={today.day.avghumidity}
        avgVis={today.day.avgvis_km}
      />
      <div className={styles.moreDetailBar}>
        <span className={styles.labelDaysForecast}>
          {weatherData.forecast.forecastday.length - 1} DAY FORECAST
        </span>
        <Link to="/details" className={styles.link}>
          Go to Details <AiOutlineRight />
        </Link>
      </div>
      <WeatherList data={weatherData.forecast.forecastday.slice(1)} />
    </div>
  );
};

export default HomePage;
