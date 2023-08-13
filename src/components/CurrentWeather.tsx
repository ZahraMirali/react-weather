import { Card, Row, Col, Space } from "antd";
import styles from "./CurrentWeather.module.css";

const CurrentWeather = ({ data, feelslike_c, pressure_mb }: any) => {
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
            <span className={styles.avgTemp}>
              {todayForecast.avgtemp_c}
              <sup> °C</sup>
            </span>
            <span>{todayForecast.condition.text}</span>
            <span>Feels like {feelslike_c} °C</span>
          </div>
        </Space>
      </Space>
      <div>
        <Row gutter={16}>
          <Col xs={16} sm={6}>
            <div className={styles.statistic}>
              <span className={styles.statisticTitle}>Wind</span>
              <span className={styles.statisticValue}>
                {todayForecast.maxwind_kph} km/h
              </span>
            </div>
          </Col>
          <Col xs={16} sm={6}>
            <div className={styles.statistic}>
              <span className={styles.statisticTitle}>Humidity</span>
              <span className={styles.statisticValue}>
                {todayForecast.avghumidity} %
              </span>
            </div>
          </Col>
          <Col xs={16} sm={6}>
            <div className={styles.statistic}>
              <span className={styles.statisticTitle}>Visibility</span>
              <span className={styles.statisticValue}>
                {todayForecast.avgvis_km} km
              </span>
            </div>
          </Col>
          <Col xs={16} sm={6}>
            <div className={styles.statistic}>
              <span className={styles.statisticTitle}>Pressure</span>
              <span className={styles.statisticValue}>{pressure_mb} mb</span>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default CurrentWeather;
