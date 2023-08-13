import { RootState } from "../store";

export const selectData = (state: RootState) => state.weather.data;
export const selectLoading = (state: RootState) => state.weather.loading;
export const selectError = (state: RootState) => state.weather.error;
