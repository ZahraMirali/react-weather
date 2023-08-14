import { AutoComplete, message } from "antd";
import debounce from "lodash.debounce";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import { LocationInfo, LocationOption } from "../../types/location";
import { getLocations } from "../../api/location";

interface SearchBarProps {
  onSubmit: (q: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [options, setOptions] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  async function handleSearch(value: string) {
    if (!value) {
      setOptions([]);
      return;
    }

    try {
      const response = await getLocations(value);
      const formattedSuggestions = response.data.map(
        (location: LocationInfo) => ({
          value: `${location.name}, ${location.country}`,
          coords: `${location.lat}, ${location.lon}`,
        })
      );
      setOptions(formattedSuggestions);
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Error fetching locations",
      });
    }
  }

  async function handleSelect(_: string, option: LocationOption) {
    setSearchValue(option.value);
    onSubmit(option.coords);
  }

  const debouncedSearch = debounce(handleSearch, 300);

  return (
    <>
      {contextHolder}
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
    </>
  );
}
