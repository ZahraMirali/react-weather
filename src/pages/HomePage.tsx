import React, { useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import CurrentWeather from "../components/CurrentWeather";
import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { useDispatch } from "react-redux";
import styles from "../components/WeatherCard.module.css";
import Typography from "antd/es/typography/Typography";
import RightOutlined from "@ant-design/icons/RightOutlined";
import { Link } from "react-router-dom";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: "681201b3f54f4f7fa1895831231108",
};

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const handleGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `https://api.weatherapi.com/v1/forecast.json`,
            {
              params: {
                q: `${latitude},${longitude}`,
                days: 5,
              },
            }
          );
          dispatch({ type: "SET_WEATHER_DATA", payload: response.data });
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  };

  useEffect(() => {
    handleGeolocation();
  }, []);

  return (
    <div>
      <CurrentWeather />
      <Typography>6 DAY FORECAST</Typography>
      <Link to="/details" className={styles.link}>
        Go to Details <RightOutlined />
      </Link>
      <WeatherCard />
    </div>
  );
};

export default HomePage;
