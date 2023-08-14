import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../../store/weather/selectors";
import WeatherDetail from "../../components/WeatherDetail";

const WeatherDetailsPage: React.FC = () => {
  const weatherData = useSelector(selectData);
  if (!weatherData) return null;

  const data = weatherData.forecast.forecastday;

  return (
    <div>
      {data.map(({ date, day }) => (
        <WeatherDetail
          key={date}
          date={date}
          conditionIcon={day.condition.icon}
          conditionText={day.condition.text}
          maxTemp={day.maxtemp_c}
          minTemp={day.mintemp_c}
          totalPrecip={day.totalprecip_mm}
          avgTemp={day.avgtemp_c}
          maxWind={day.maxwind_kph}
          avgHumidity={day.avghumidity}
          avgVis={day.avgvis_km}
          uv={day.uv}
          totalSnow={day.totalsnow_cm}
          dailyChanceOfSnow={day.daily_chance_of_snow}
          dailyChanceOfRain={day.daily_chance_of_rain}
        />
      ))}
    </div>
  );
};

export default WeatherDetailsPage;
