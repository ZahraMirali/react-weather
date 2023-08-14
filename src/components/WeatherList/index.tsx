import { useState } from "react";
import { Space } from "antd";
import WeatherCard from "../WeatherCard";
import { ForecastDay } from "../../types/weather";
import styles from "./WeatherList.module.css";

interface WeatherListProps {
  data: ForecastDay[];
}

const WeatherList = ({ data }: WeatherListProps) => {
  const [expandedDate, setExpandedDate] = useState(data[0].date);

  const toggleExpand = (text: string) => {
    setExpandedDate(text);
  };

  return (
    <Space className={styles.list}>
      {data.map((item) => (
        <WeatherCard
          key={item.date}
          date={item.date}
          conditionIcon={item.day.condition.icon}
          conditionText={item.day.condition.text}
          maxTemp={item.day.maxtemp_c}
          minTemp={item.day.mintemp_c}
          totalPrecip={item.day.totalprecip_mm}
          expanded={expandedDate === item.date}
          toggleExpand={() => toggleExpand(item.date)}
        />
      ))}
    </Space>
  );
};

export default WeatherList;
