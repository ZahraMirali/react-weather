import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherDetailsPage from "./pages/WeatherDetailsPage";
import styles from "./App.module.css";
import { Alert, Layout, Spin } from "antd";
import SearchBar from "./components/SearchBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "./constants/urls";
import axios from "axios";
import ErrorBoundary from "./components/ErrorBoundary";
import { fetchForecastWeather } from "./store/weather/weatherSlice";
import {
  selectError,
  selectLoading,
  selectData,
} from "./store/weather/selectors";
import { AppDispatch } from "./store/store";

const { Header, Content } = Layout;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: "681201b3f54f4f7fa1895831231108",
};

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
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <h1 className={styles.title}>Weather App</h1>
          <SearchBar onSubmit={getForecastWeather} />
        </Header>
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
            {error ? (
              <Alert message={error} type="error" />
            ) : !weatherData ? (
              <Alert
                message="Request Geolocation"
                description="To provide you with better service, please enable geolocation."
                type="info"
              />
            ) : (
              <Routes>
                <Route path="/details" element={<WeatherDetailsPage />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            )}
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
