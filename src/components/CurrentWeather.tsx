import { Card, Row, Col, Statistic, Typography, Space } from "antd";
import styles from "./CurrentWeather.module.css";

const WeatherCard = () => {
  return (
    <Card className={styles.currentWeatherCard}>
      <Space direction="vertical">
        <div>
          <div>Current weather</div>
          <div>5:40 PM</div>
        </div>
        <Space>
          <img
            width={72}
            height={72}
            title="Sunny"
            src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/SunnyDayV3.svg"
          />
          <Typography>70 °C</Typography>
          <div>
            <Typography>Light rain showers</Typography>
            <Typography>Feels like 70°</Typography>
          </div>
        </Space>
      </Space>
      <div>
        <Row gutter={16}>
          <Col xs={8} sm={4}>
            <Statistic title="Air quality" value={15} />
          </Col>
          <Col xs={8} sm={4}>
            <Statistic title="Wind" value={18} suffix="km/h" />
          </Col>
          <Col xs={8} sm={4}>
            <Statistic title="Humidity" value={68} suffix="%" />
          </Col>
          <Col xs={8} sm={4}>
            <Statistic title="Visibility" value={14.3} suffix="km" />
          </Col>
          <Col xs={8} sm={4}>
            <Statistic title="Pressure" value={29.98} suffix="mb" />
          </Col>
          <Col xs={8} sm={4}>
            <Statistic title="Dew Point" value={60} suffix="°" />
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default WeatherCard;
