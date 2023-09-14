import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    isLoading: false,
    currentCity: {
      cityName: "",
      temperature: "",
      condition: "",
      icon: "",
    },
    error: null,
  },
  reducers: {
    setWeather: (state, action) => {
      state.isLoading = true;
      state.currentCity = action.payload;
      state.error = false;
      state.isLoading = false;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { setWeather, setError } = weatherSlice.actions;

// hacer correcciones responsive. Pruebas y despliege.
