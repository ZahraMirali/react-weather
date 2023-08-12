import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherDetailsPage from "./pages/WeatherDetailsPage";
import styles from "./App.module.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.appContainer}>
          <h1 className={styles.appTitle}>Weather App</h1>
          <Routes>
            <Route path="/details" element={<WeatherDetailsPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
