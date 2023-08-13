import { AutoComplete } from "antd";
import axios from "axios";
import debounce from "lodash.debounce";
import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }: any) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [options, setOptions] = useState([]);

  async function handleSearch(value: any) {
    if (!value) {
      setOptions([]);
      return;
    }

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
    setSearchValue(option.value);
    console.log("handleSelect", option);
    onSubmit(option.coords);
  }

  const debouncedSearch = debounce(handleSearch, 300);

  return (
    <AutoComplete
      value={searchValue}
      onChange={setSearchValue}
      className={styles.autocomplete}
      onSelect={handleSelect}
      onSearch={debouncedSearch}
      placeholder="Search city..."
      options={options}
      allowClear
      notFoundContent={searchValue ? "No results found" : null}
    />
  );
}
