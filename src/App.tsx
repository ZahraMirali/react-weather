import { BrowserRouter } from "react-router-dom";
import { Alert, Layout } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ErrorBoundary from "./components/ErrorBoundary";
import { fetchForecastWeather } from "./store/weather/weatherSlice";
import { AppDispatch } from "./store/store";
import Header from "./components/Header";
import Content from "./components/Content";
import ErrorFallback from "./components/ErrorFallback";

function App() {
  const dispatch: AppDispatch = useDispatch();

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
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Header onSearchSubmit={getForecastWeather} />
        <Content />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
