import { useState } from "react";
import { Space } from "antd";
import WeatherCard from "./WeatherCard";
import { ForecastDay } from "../types/weather";

interface WeatherListProps {
  data: ForecastDay[];
}

const WeatherList = ({ data }: WeatherListProps) => {
  const [expanded, setExpanded] = useState(data[0].date);

  const toggleExpand = (text: string) => {
    setExpanded(text);
  };

  return (
    <Space style={{ overflowX: "auto", display: "flex", borderRadius: "6px" }}>
      {data.map((item) => (
        <WeatherCard
          key={item.date}
          header={item.date}
          iconSrc={item.day.condition.icon}
          highTemp="31"
          lowTemp="27"
          precipitation="12"
          expandedText={expanded}
          toggleExpand={toggleExpand}
        />
      ))}
    </Space>
  );
};

export default WeatherList;
