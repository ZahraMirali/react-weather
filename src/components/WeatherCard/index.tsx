import { Button } from "antd";
import { IoWaterSharp } from "react-icons/io5";
import styles from "./WeatherCard.module.css";

interface WeatherCardProps {
  date: string;
  conditionIcon: string;
  conditionText: string;
  maxTemp: number;
  minTemp: number;
  totalPrecip: number;
  expanded: boolean;
  toggleExpand: () => void;
}

const WeatherCard = ({
  date,
  conditionIcon,
  conditionText,
  maxTemp,
  minTemp,
  totalPrecip,
  expanded,
  toggleExpand,
}: WeatherCardProps) => {
  return (
    <Button
      className={expanded ? styles.btnActive : styles.btn}
      onClick={toggleExpand}
    >
      <div className={styles.weatherBox}>
        <div className={styles.dateAndImageBox}>
          <p>{date}</p>
          <img src={conditionIcon} alt={conditionText} />
        </div>
        <div className={styles.expandBox}>
          <div>{maxTemp}°</div>
          <div>{minTemp}°</div>
          <div>
            <IoWaterSharp />
            <span>{totalPrecip}%</span>
          </div>
        </div>
      </div>
    </Button>
  );
};

export default WeatherCard;
