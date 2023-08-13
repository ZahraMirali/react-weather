import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherDetailsPage from "./pages/WeatherDetailsPage";
import styles from "./App.module.css";
import { Alert, Col, Layout, Row, Spin } from "antd";
import SearchBar from "./components/SearchBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorBoundary from "./components/ErrorBoundary";
import { fetchForecastWeather } from "./store/weather/weatherSlice";
import {
  selectData,
  selectError,
  selectLoading,
} from "./store/weather/selectors";
import { AppDispatch } from "./store/store";
import { EnvironmentOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

function App() {
  const dispatch: AppDispatch = useDispatch();
  const weatherData = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    handleGeolocation();
  }, []);

  function handleGeolocation() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      getForecastWeather(`${latitude},${longitude}`);
    });
  }

  function getForecastWeather(q: string) {
    dispatch(fetchForecastWeather(q));
  }

  return (
    <BrowserRouter>
      <Header className={styles.header}>
        <Row align="middle" justify="space-between" style={{ flex: 1 }}>
          <Col xs={24} md={12}>
            <Link to="/">
              <h1 className={styles.title}>Weather App</h1>
            </Link>
          </Col>
          <SearchBar onSubmit={getForecastWeather} />
        </Row>
      </Header>

      <Layout className={styles.layout}>
        <Content>
          <ErrorBoundary
            fallback={
              <Alert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
              />
            }
          >
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
                      {weatherData.location.name},{" "}
                      {weatherData.location.country}
                    </div>
                    <Routes>
                      <Route path="/details" element={<WeatherDetailsPage />} />
                      <Route path="/" element={<HomePage />} />
                    </Routes>
                  </>
                )}
              </Col>
            </Row>
          </ErrorBoundary>
          {loading && (
            <div className="loading-overlay">
              <Spin size="large" />
            </div>
          )}
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
