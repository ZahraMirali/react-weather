import axios from "axios";
import { BASE_URL } from "../constants/urls";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: process.env.REACT_APP_API_KEY,
};
