import React, { useState } from "react";
import {
  Layout,
  Statistic,
  Button,
  Card,
  Row,
  Col,
  Space,
  Typography,
  Divider,
} from "antd";
import { useSelector } from "react-redux";
import { selectData } from "../store/weather/selectors";

const WeatherDetailsPage: React.FC = () => {
  const weatherData = useSelector(selectData);

  const data = weatherData.forecast.forecastday;

  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      {data.map(({ date, day }: any) => (
        <Card>
          <Typography>Day {date}</Typography>
          <Divider />
          <Row justify="space-between">
            <img
              width={72}
              height={72}
              alt={day.condition.text}
              src={day.condition.icon}
            />
            <Statistic
              title="avgtemp_c"
              value={day.avgtemp_c}
              prefix="°C"
              style={{ marginBottom: 16 }}
            />
            <Space direction="vertical">
              <Statistic
                title="maxtemp_c"
                value={day.maxtemp_c}
                prefix="°C"
                style={{ marginBottom: 16 }}
              />
              <Statistic
                title="mintemp_c"
                value={day.mintemp_c}
                prefix="°C"
                style={{ marginBottom: 16 }}
              />
            </Space>
          </Row>
          <p>{day.condition.text}</p>
          <Row gutter={30}>
            <Col xs={24} sm={12}>
              <Row align="middle" justify="space-between">
                <h3>Wind</h3>
                <p>{day.maxwind_kph} km/h</p>
              </Row>
              <Row align="middle" justify="space-between">
                <h3>UV Index</h3>
                <p>{day.uv}</p>
              </Row>
              <Row align="middle" justify="space-between">
                <h3>Humidity</h3>
                <p>{day.avghumidity}</p>
              </Row>
              <Row align="middle" justify="space-between">
                <h3>Visibility</h3>
                <p>{day.avgvis_km} km</p>
              </Row>
            </Col>
            <Col xs={24} sm={12}>
              <Row align="middle" justify="space-between">
                <h3>Precipitation</h3>
                <p>{day.totalprecip_mm} mm</p>
              </Row>
              <Row align="middle" justify="space-between">
                <h3>Snow</h3>
                <p>{day.totalsnow_cm} cm</p>
              </Row>
              <Row align="middle" justify="space-between">
                <h3>Probability of Snow</h3>
                <p>{day.daily_chance_of_snow}</p>
              </Row>
              <Row align="middle" justify="space-between">
                <h3>Probability of Rain</h3>
                <p>{day.daily_chance_of_rain}</p>
              </Row>
            </Col>
          </Row>
        </Card>
      ))}
    </Space>
  );
};

export default WeatherDetailsPage;
