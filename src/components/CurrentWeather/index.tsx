import { Card, Col, Row, Space } from "antd";
import styles from "./CurrentWeather.module.css";
import commonStyles from "../../common/Styles.module.css";
import Statistic from "../Statistic";

interface CurrentWeatherProps {
  conditionText: string;
  conditionIcon: string;
  avgTemp: number;
  maxWind: number;
  avgHumidity: number;
  avgVis: number;
  date: string;
  feelslike: number;
  pressure: number;
}

const CurrentWeather = ({
  conditionText,
  conditionIcon,
  avgTemp,
  maxWind,
  avgHumidity,
  avgVis,
  date,
  feelslike,
  pressure,
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
                {avgTemp}
                <sup> °C</sup>
              </span>
            </Space>
          </Col>
          <Col xs={24} md={12}>
            <div className={styles.summaryBox}>
              <span className={styles.conditionText}>{conditionText}</span>
              <span className={styles.feelsLikeText}>
                Feels like {feelslike}
                <sup> °C</sup>
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.statisticsBar}>
        <Row gutter={16}>
          <Col xs={16} sm={6}>
            <Statistic title="Wind" value={maxWind} suffix="km/h" />
          </Col>
          <Col xs={16} sm={6}>
            <Statistic title="Humidity" value={avgHumidity} suffix="%" />
          </Col>
          <Col xs={16} sm={6}>
            <Statistic
              title="Visibility"
              value={avgVis}
              suffix="km"
              suffixIsSuperscript={false}
            />
          </Col>
          <Col xs={16} sm={6}>
            <Statistic
              title="Pressure"
              value={pressure}
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
