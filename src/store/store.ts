import { createStore } from "redux";
import rootReducer from "./weather/reducers";

const store = createStore(rootReducer);

export default store;
