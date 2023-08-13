import styles from "./Content.module.css";
import { EnvironmentOutlined } from "@ant-design/icons";
import {
  selectData,
  selectError,
  selectLoading,
} from "../../store/weather/selectors";
import { useSelector } from "react-redux";
import HomePage from "../../pages/HomePage";
import WeatherDetailsPage from "../../pages/WeatherDetailsPage";
import { Alert, Col, Layout, Row, Spin } from "antd";
import { Route, Routes } from "react-router-dom";

const { Content: AntContent } = Layout;

const Content = () => {
  const weatherData = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Layout className={styles.layout}>
      <AntContent>
        <Row justify="center" align="middle">
          <Col xs={24} md={20}>
            {error ? (
              <Alert message={error} type="error" />
            ) : !weatherData ? (
              <Alert
                message="Request Geolocation"
                description="To provide you with better service, please enable geolocation."
                type="info"
              />
            ) : (
              <>
                <div className={styles.location}>
                  <EnvironmentOutlined className={styles.locationIcon} />
                  {weatherData.location.name}, {weatherData.location.country}
                </div>
                <Routes>
                  <Route path="/details" element={<WeatherDetailsPage />} />
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </>
            )}
          </Col>
        </Row>
        {loading && (
          <div className="loading-overlay">
            <Spin size="large" />
          </div>
        )}
      </AntContent>
    </Layout>
  );
};

export default Content;
