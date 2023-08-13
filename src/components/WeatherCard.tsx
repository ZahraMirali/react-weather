import { useState } from "react";
import { Button } from "antd";
import styles from "./WeatherCard.module.css";

const WeatherCard = ({
  header,
  iconSrc,
  highTemp,
  lowTemp,
  precipitation,
  expandedText,
  toggleExpand,
}: any) => {
  const expanded = expandedText === header;

  return (
    <li
      style={{
        display: "inline-block",
        marginRight: "8px"
      }}
      onClick={() => toggleExpand(header)}
    >
      <Button className={expanded ? styles.btnActive : styles.btn }>
        <span>
          <div>
            <div style={{display: "flex", height:"160px", minWidth: "150px", maxWidth: "300px"}}>
              <div style={{width: "150px"}}>
                <p>{header}</p>
                <img
                    src={iconSrc}
                    title="Weather Condition"
                    alt="Weather Condition"
                />
              </div>
                {expanded && (
                    <div className={styles.expandBox}>
                        <div style={{width: "150px"}}>
                            <div>{highTemp}°</div>
                        </div>
                        <div>
                            <div>{lowTemp}°</div>
                            <div>
                                <div title="Precipitation"><span><img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgNiA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNS4yNzM0NCA0LjU1NDY5QzUuNDI0NDggNC44NTE1NiA1LjUgNS4xNjY2NyA1LjUgNS41QzUuNSA1LjcyOTE3IDUuNDcwMDUgNS45NTA1MiA1LjQxMDE2IDYuMTY0MDZDNS4zNTAyNiA2LjM3NzYgNS4yNjU2MiA2LjU3NjgyIDUuMTU2MjUgNi43NjE3MkM1LjA0OTQ4IDYuOTQ2NjEgNC45MTkyNyA3LjExNTg5IDQuNzY1NjIgNy4yNjk1M0M0LjYxNDU4IDcuNDIwNTcgNC40NDY2MSA3LjU1MDc4IDQuMjYxNzIgNy42NjAxNkM0LjA3NjgyIDcuNzY2OTMgMy44Nzc2IDcuODUwMjYgMy42NjQwNiA3LjkxMDE2QzMuNDUwNTIgNy45NzAwNSAzLjIyOTE3IDggMyA4QzIuNzcwODMgOCAyLjU0OTQ4IDcuOTcwMDUgMi4zMzU5NCA3LjkxMDE2QzIuMTIyNCA3Ljg1MDI2IDEuOTIzMTggNy43NjY5MyAxLjczODI4IDcuNjYwMTZDMS41NTMzOSA3LjU1MDc4IDEuMzg0MTEgNy40MjA1NyAxLjIzMDQ3IDcuMjY5NTNDMS4wNzk0MyA3LjExNTg5IDAuOTQ5MjE5IDYuOTQ2NjEgMC44Mzk4NDQgNi43NjE3MkMwLjczMzA3MyA2LjU3NjgyIDAuNjQ5NzQgNi4zNzc2IDAuNTg5ODQ0IDYuMTY0MDZDMC41Mjk5NDggNS45NTA1MiAwLjUgNS43MjkxNyAwLjUgNS41QzAuNSA1LjE2OTI3IDAuNTcyOTE3IDQuODU1NDcgMC43MTg3NSA0LjU1ODU5TDIuOTgwNDcgMEw1LjI3MzQ0IDQuNTU0NjlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
                                    alt="Precipitation"
                                    aria-label="Precipitation"
                                    role="presentation"
                                    style={{
                                        width: "10px",
                                        height: "10px",
                                        opacity: "0.8",
                                    }}
                                /></span>
                                    <span>{precipitation}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
          </div>
        </span>
            </Button>
        </li>
    );
};

const WeatherCardList = () => {
  const [expanded, setExpanded] = useState("today");

  const toggleExpand = (text: string) => {
    setExpanded(text);
  };

  return (
    <ul
      style={{
        height: "120px",
        transform: "translate3d(0px, 0px, 0px)",
        transition: "all 0s ease 0s",
      }}
    >
      <WeatherCard
        header="today"
        iconSrc="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlySunnyDay.svg"
        highTemp="31"
        lowTemp="27"
        precipitation="12"
        expandedText={expanded}
        toggleExpand={toggleExpand}
      />
      <WeatherCard
        header="Sun 13"
        iconSrc="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/D210LightRainShowersV2.svg"
        highTemp="31"
        lowTemp="27"
        expandedText={expanded}
        toggleExpand={toggleExpand}
      />
      <WeatherCard
        header="Mon 14"
        iconSrc="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/D210LightRainShowersV2.svg"
        highTemp="32"
        lowTemp="26"
        expandedText={expanded}
        toggleExpand={toggleExpand}
      />
    </ul>
  );
};

export default WeatherCardList;
