import { Card, Row, Col, Statistic, Typography, Space } from "antd";
import styles from "./CurrentWeather.module.css";

const CurrentWeather = ({ data }: any) => {
  const todayForecast = data.day;

  return (
    <Card className={styles.currentWeatherCard}>
      <Space direction="vertical">
        <Space>
          <div>Today</div>
          <div>{data.date}</div>
        </Space>
        <Space>
          <img
            width={72}
            height={72}
            alt={todayForecast.condition.text}
            src={todayForecast.condition.icon}
          />
          <div>
            <Typography>{todayForecast.avgtemp_c} °C</Typography>
            <Typography>{todayForecast.condition.text}</Typography>
          </div>
        </Space>
      </Space>
      <div>
        <Row gutter={16}>
          <Col xs={16} sm={8}>
            <Statistic
              title="Wind"
              value={todayForecast.maxwind_kph}
              suffix="km/h"
            />
          </Col>
          <Col xs={16} sm={8}>
            <Statistic
              title="Humidity"
              value={todayForecast.avghumidity}
              suffix="%"
            />
          </Col>
          <Col xs={16} sm={8}>
            <Statistic
              title="Visibility"
              value={todayForecast.avgvis_km}
              suffix="km"
            />
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default CurrentWeather;
