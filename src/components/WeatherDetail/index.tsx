import React from "react";
import { Card, Col, Divider, Row, Space } from "antd";
import styles from "../../common/Styles.module.css";
import Statistic from "../../components/Statistic";

interface WeatherDetailProps {
  date: any;
  day: any;
}

const WeatherDetail = ({ date, day }: WeatherDetailProps) => {
  return (
    <Card className={styles.weatherBox}>
      <span>{date}</span>
      <Divider />
      <Row justify="space-between">
        <img
          width={72}
          height={72}
          alt={day.condition.text}
          src={day.condition.icon}
        />
        <Statistic
          title="Temperature"
          value={day.avgtemp_c}
          suffix="°C"
          suffixIsSuperscript={true}
        />
        <Space direction="vertical">
          <Statistic
            title="Max"
            value={day.maxtemp_c}
            suffix="°C"
            suffixIsSuperscript={true}
          />
          <Statistic
            title="Min"
            value={day.mintemp_c}
            suffix="°C"
            suffixIsSuperscript={true}
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
  );
};

export default WeatherDetail;
