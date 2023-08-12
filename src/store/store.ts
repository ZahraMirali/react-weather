import { createStore } from "redux";

const initialState = {
  weatherData: null,
};

const reducer = (state = initialState, action: any) => {
  if (action.type === "SET_WEATHER_DATA") {
    return {
      ...state,
      weatherData: action.payload,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
