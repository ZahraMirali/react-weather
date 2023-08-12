import { AutoComplete } from "antd";
import axios from "axios";
import debounce from "lodash.debounce";
import { useState } from "react";
import { FORECAST_URL } from "../constants/urls";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);

  async function handleSearch(value: any) {
    console.log("handleSearch", value);

    if (!value) return;

    try {
      const response = await axios.get("search.json", { params: { q: value } });
      const formattedSuggestions = response.data.map((location: any) => ({
        value: `${location.name}, ${location.country}`,
        coords: `${location.lat}, ${location.lon}`,
      }));
      setOptions(formattedSuggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }

  async function handleSelect(event: any, option: any) {
    console.log("handleSelect", option);

    try {
      const response = await axios.get(FORECAST_URL, {
        params: {
          q: option.coords,
          days: 5,
        },
      });
      dispatch({ type: "SET_WEATHER_DATA", payload: response.data });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  const debouncedSearch = debounce(handleSearch, 300);

  return (
    <AutoComplete
      style={{ width: 200 }}
      onSelect={handleSelect}
      onSearch={debouncedSearch}
      placeholder="input here"
      options={options}
      allowClear
      filterOption={false}
    />
  );
}
