import { Alert } from "antd";
import { Route, Routes } from "react-router-dom";
import { EnvironmentOutlined } from "@ant-design/icons";
import { selectData, selectError } from "../../store/weather/selectors";
import { useSelector } from "react-redux";
import HomePage from "../../pages/Home";
import WeatherDetailsPage from "../../pages/WeatherDetails";
import styles from "./Content.module.css";

const Content = () => {
  const weatherData = useSelector(selectData);
  const error = useSelector(selectError);

  if (error) {
    return <Alert message={error} type="error" />;
  }

  if (!weatherData) {
    return (
      <Alert
        message="Request Geolocation"
        description="To provide you with better service, please enable geolocation."
        type="info"
      />
    );
  }

  return (
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
  );
};

export default Content;
