import { Spin } from "antd";
import styles from "./Loading.module.css";

interface LoadingProps {
  value: boolean;
}

const Loading = ({ value }: LoadingProps) => {
  if (!value) return null;

  return (
    <div className={styles.loading}>
      <Spin size="large" />
    </div>
  );
};

export default Loading;
