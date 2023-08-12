import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherDetailsPage from "./pages/WeatherDetailsPage";
import styles from "./App.module.css";
import { Layout } from "antd";
import SearchBar from "./components/SearchBar";

const { Header, Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout className={styles.layout}>
          <Header className={styles.header}>
            <h1 className={styles.title}>Weather App</h1>
            <SearchBar />
          </Header>
          <Content>
            <Routes>
              <Route path="/details" element={<WeatherDetailsPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Content>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
