import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Layout, Row } from "antd";
import ErrorBoundary from "./components/ErrorBoundary";
import { fetchForecastWeather } from "./store/weather/weatherSlice";
import { AppDispatch } from "./store/store";
import Header from "./components/Header";
import Content from "./components/Content";
import ErrorFallback from "./components/ErrorFallback";
import styles from "./App.module.css";
import { selectLoading } from "./store/weather/selectors";
import Loading from "./components/Loading";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      dispatch(fetchForecastWeather(`${latitude},${longitude}`));
    });
  }, [dispatch]);

  function getForecastWeather(q: string) {
    dispatch(fetchForecastWeather(q));
  }

  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Header onSearchSubmit={getForecastWeather} />
        <Layout className={styles.layout}>
          <main>
            <Row justify="center">
              <Col xs={24} md={20}>
                <Content />
              </Col>
            </Row>
            <Loading value={loading} />
          </main>
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
