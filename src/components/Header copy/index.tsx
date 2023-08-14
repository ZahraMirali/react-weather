import { Col, Row } from "antd";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

interface HeaderProps {
  onSearchSubmit: (q: string) => void;
}

const Header = ({ onSearchSubmit }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Row align="middle" justify="space-between" style={{ flex: 1 }}>
        <Col xs={24} sm={8}>
          <Link to="/">
            <h1 className={styles.title}>Weather App</h1>
          </Link>
        </Col>
        <SearchBar onSubmit={onSearchSubmit} />
      </Row>
    </header>
  );
};

export default Header;
