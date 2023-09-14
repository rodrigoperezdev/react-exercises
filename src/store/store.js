import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "./weather-app/weatherSlice";

export default configureStore({
  reducer: {
    weather: weatherSlice.reducer,
  },
});
