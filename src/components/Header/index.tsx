import { Col, Layout, Row } from "antd";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

const { Header: AntHeader } = Layout;

interface HeaderProps {
  onSearchSubmit: (q: string) => void;
}

const Header = ({ onSearchSubmit }: HeaderProps) => {
  return (
    <AntHeader className={styles.header}>
      <Row align="middle" justify="space-between" style={{ flex: 1 }}>
        <Col xs={24} sm={8}>
          <Link to="/">
            <h1 className={styles.title}>Weather App</h1>
          </Link>
        </Col>
        <SearchBar onSubmit={onSearchSubmit} />
      </Row>
    </AntHeader>
  );
};

export default Header;
