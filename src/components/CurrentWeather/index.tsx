import { Card, Col, Row, Space } from "antd";
import styles from "./CurrentWeather.module.css";
import commonStyles from "../../common/Styles.module.css";
import Statistic from "../Statistic";

interface CurrentWeatherProps {
  conditionText: string;
  conditionIcon: string;
  avgtemp_c: number;
  maxwind_kph: number;
  avghumidity: number;
  avgvis_km: number;
  date: string;
  feelslike_c: number;
  pressure_mb: number;
}

const CurrentWeather = ({
  conditionText,
  conditionIcon,
  avgtemp_c,
  maxwind_kph,
  avghumidity,
  avgvis_km,
  date,
  feelslike_c,
  pressure_mb,
}: CurrentWeatherProps) => {
  return (
    <Card className={commonStyles.weatherBox}>
      <div>
        <div className={styles.currentWeatherLabelAndDateBox}>
          <span className={styles.currentWeatherLabel}>Current weather</span>
          <span className={styles.currentDate}>{date}</span>
        </div>
        <Row gutter={[24, 8]} align="middle">
          <Col>
            <Space>
              <img
                width={96}
                height={96}
                alt={conditionText}
                src={conditionIcon}
              />
              <span className={styles.avgTemp}>
                {avgtemp_c}
                <sup> °C</sup>
              </span>
            </Space>
          </Col>
          <Col xs={24} md={12}>
            <div className={styles.summaryBox}>
              <span className={styles.conditionText}>{conditionText}</span>
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
            <Statistic title="Wind" value={maxwind_kph} suffix="km/h" />
          </Col>
          <Col xs={16} sm={6}>
            <Statistic title="Humidity" value={avghumidity} suffix="%" />
          </Col>
          <Col xs={16} sm={6}>
            <Statistic
              title="Visibility"
              value={avgvis_km}
              suffix="km"
              suffixIsSuperscript={false}
            />
          </Col>
          <Col xs={16} sm={6}>
            <Statistic
              title="Pressure"
              value={pressure_mb}
              suffix="mb"
              suffixIsSuperscript={false}
            />
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default CurrentWeather;
