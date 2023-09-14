import { weatherAPI } from "../../helpers/weatherAPI";
import { setError, setWeather } from "./weatherSlice";

export const startLoadingWeather = (city) => {
  return async (dispatch) => {
    const data = await weatherAPI(city);

    if (!data.error) {
      dispatch(setWeather(data));
      return;
    }

    dispatch(setError());
  };
};
