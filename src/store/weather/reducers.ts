import { combineReducers } from "redux";
import { SET_WEATHER_DATA, SET_LOADING, SET_ERROR } from "./types";

const initialState = {
  weatherData: null,
  loading: false,
  error: null,
};

const weatherReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  weather: weatherReducer,
});
