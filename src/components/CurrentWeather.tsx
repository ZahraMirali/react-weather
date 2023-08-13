import { Card, Row, Col, Space } from "antd";
import styles from "./CurrentWeather.module.css";

const CurrentWeather = ({ data, feelslike_c, pressure_mb }: any) => {
  const todayForecast = data.day;

  return (
    <Card className={styles.currentWeatherCard}>
      <div>
        <div className={styles.currentWeatherLabelAndDateBox}>
          <span className={styles.currentWeatherLabel}>Current weather</span>
          <span className={styles.currentDate}>{data.date}</span>
        </div>
        <Row gutter={[24, 8]} align="middle">
          <Col>
            <Space>
              <img
                width={96}
                height={96}
                alt={todayForecast.condition.text}
                src={todayForecast.condition.icon}
              />
              <span className={styles.avgTemp}>
                {todayForecast.avgtemp_c}
                <sup> °C</sup>
              </span>
            </Space>
          </Col>
          <Col xs={24} md={12}>
            <div className={styles.summaryBox}>
              <span className={styles.conditionText}>
                {todayForecast.condition.text}
              </span>
              <span className={styles.feelsLikeText}>
                Feels like {feelslike_c}
                <sup> °C</sup>
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.statisticsBar}>
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
