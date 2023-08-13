import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherDetailsPage from "./pages/WeatherDetailsPage";
import styles from "./App.module.css";
import { Alert, Button, Layout, Space, Spin } from "antd";
import SearchBar from "./components/SearchBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL, FORECAST_URL } from "./constants/urls";
import axios from "axios";
import ErrorBoundary from "./components/ErrorBoundary";
import { setWeatherData, setLoading, setError } from "./store/weather/actions";
import { selectError, selectLoading, selectWeatherData } from "./store/weather/selectors";

const { Header, Content } = Layout;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: "681201b3f54f4f7fa1895831231108",
};

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector(selectWeatherData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        await getForecast(`${latitude},${longitude}`);
      }
    );
  };

  async function getForecast(q: string) {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const response = await axios.get(FORECAST_URL, {
        params: {
          q,
          days: 8,
        },
      });
      dispatch(setWeatherData(response.data));
    } catch (error) {
      dispatch(setError("An error occurred while fetching weather data."));
    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    handleGeolocation();
  }, []);

  return (
    <BrowserRouter>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <h1 className={styles.title}>Weather App</h1>
          <SearchBar onSubmit={getForecast} />
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
            {error ? <Alert message={error} type="error" /> : !weatherData ? <Alert
              message="Request Geolocation"
              description="To provide you with better service, please enable geolocation."
              type="info"
            /> : <Routes>
              <Route path="/details" element={<WeatherDetailsPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>}
          </ErrorBoundary>
          {loading && <div className="loading-overlay">
              <Spin size="large" />
            </div>}
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
