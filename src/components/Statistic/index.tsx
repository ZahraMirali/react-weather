import styles from "./Statistic.module.css";

interface StatisticProps {
  title: string;
  value: number;
  suffix: string;
  suffixIsSuperscript?: boolean;
}

const Statistic = ({
  title,
  value,
  suffix,
  suffixIsSuperscript,
}: StatisticProps) => {
  return (
    <div className={styles.statistic}>
      <span className={styles.statisticTitle}>{title}</span>
      <span className={styles.statisticValue}>
        {value} {suffixIsSuperscript ? <sup>{suffix}</sup> : suffix}
      </span>
    </div>
  );
};

export default Statistic;
