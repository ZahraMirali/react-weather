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
      <Row className={styles.row}>
        <Col xs={24} sm={8}>
          <Link to="/">
            <h1 className={styles.title}>Weather App</h1>
          </Link>
        </Col>
        <Col xs={24} sm={12} md={9} lg={6}>
          <SearchBar onSubmit={onSearchSubmit} />
        </Col>
      </Row>
    </header>
  );
};

export default Header;
