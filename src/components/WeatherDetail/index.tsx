import { Card, Col, Divider, Row, Space } from "antd";
import styles from "../../common/Styles.module.css";
import Statistic from "../../components/Statistic";

interface WeatherDetailProps {
  date: string;
  conditionIcon: string;
  conditionText: string;
  maxTemp: number;
  minTemp: number;
  totalPrecip: number;
  avgTemp: number;
  maxWind: number;
  avgHumidity: number;
  avgVis: number;
  uv: number;
  totalSnow: number;
  dailyChanceOfSnow: number;
  dailyChanceOfRain: number;
}

const WeatherDetail = ({
  date,
  conditionIcon,
  conditionText,
  maxTemp,
  minTemp,
  totalPrecip,
  avgTemp,
  maxWind,
  avgHumidity,
  avgVis,
  uv,
  totalSnow,
  dailyChanceOfSnow,
  dailyChanceOfRain,
}: WeatherDetailProps) => {
  return (
    <Card className={styles.weatherBox}>
      <span>{date}</span>
      <Divider />
      <Row justify="space-between">
        <img
          width={72}
          height={72}
          alt={conditionText}
          title={conditionText}
          src={conditionIcon}
        />
        <Statistic
          title="Temperature"
          value={avgTemp}
          suffix="°C"
          suffixIsSuperscript={true}
        />
        <Space direction="vertical">
          <Statistic
            title="Max"
            value={maxTemp}
            suffix="°C"
            suffixIsSuperscript={true}
          />
          <Statistic
            title="Min"
            value={minTemp}
            suffix="°C"
            suffixIsSuperscript={true}
          />
        </Space>
      </Row>
      <p>{conditionText}</p>
      <Row gutter={30}>
        <Col xs={24} sm={12}>
          <Row align="middle" justify="space-between">
            <h3>Wind</h3>
            <p>{maxWind} km/h</p>
          </Row>
          <Row align="middle" justify="space-between">
            <h3>UV Index</h3>
            <p>{uv}</p>
          </Row>
          <Row align="middle" justify="space-between">
            <h3>Humidity</h3>
            <p>{avgHumidity}</p>
          </Row>
          <Row align="middle" justify="space-between">
            <h3>Visibility</h3>
            <p>{avgVis} km</p>
          </Row>
        </Col>
        <Col xs={24} sm={12}>
          <Row align="middle" justify="space-between">
            <h3>Precipitation</h3>
            <p>{totalPrecip} mm</p>
          </Row>
          <Row align="middle" justify="space-between">
            <h3>Snow</h3>
            <p>{totalSnow} cm</p>
          </Row>
          <Row align="middle" justify="space-between">
            <h3>Probability of Snow</h3>
            <p>{dailyChanceOfSnow}</p>
          </Row>
          <Row align="middle" justify="space-between">
            <h3>Probability of Rain</h3>
            <p>{dailyChanceOfRain}</p>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default WeatherDetail;
