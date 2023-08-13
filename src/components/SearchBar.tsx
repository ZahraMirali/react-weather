import { AutoComplete } from "antd";
import axios from "axios";
import debounce from "lodash.debounce";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import { LocationInfo, LocationOption } from "../types/location";

interface SearchBarProps {
  onSubmit: (q: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [options, setOptions] = useState([]);

  async function handleSearch(value: string) {
    if (!value) {
      setOptions([]);
      return;
    }

    try {
      const response = await axios.get("search.json", { params: { q: value } });
      const formattedSuggestions = response.data.map(
        (location: LocationInfo) => ({
          value: `${location.name}, ${location.country}`,
          coords: `${location.lat}, ${location.lon}`,
        })
      );
      setOptions(formattedSuggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }

  async function handleSelect(_: string, option: LocationOption) {
    setSearchValue(option.value);
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
