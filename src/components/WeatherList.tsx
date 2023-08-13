import { useState } from "react";
import { Space } from "antd";
import WeatherCard from "./WeatherCard";

const WeatherList = ({ data }: any) => {
  const [expanded, setExpanded] = useState(data[0].date);

  const toggleExpand = (text: string) => {
    setExpanded(text);
  };

  return (
    <Space>
      {data.map((item: any) => (
        <WeatherCard
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
