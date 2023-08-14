import styles from "./Statistic.module.css";

const Statistic = ({
  title,
  value,
  suffix,
  suffixIsSuperscript = false,
}: any) => {
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
