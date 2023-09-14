import React from "react";
import { Header } from "../UI/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingWeather } from "../../store/weather-app/thunks";
import { useForm } from "react-hook-form";

export const ReduxWeatherApp = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const { currentCity, error, isLoading } = useSelector(
    (state) => state.weather
  );
  let hasError = null;

  useEffect(() => {
    dispatch(startLoadingWeather("New york"));
  }, []);

  const onNewCity = ({ city }) => {
    dispatch(startLoadingWeather(city));
  };

  return (
    <Header>
      <div className="component__container">
        <div className="row">
          <div>
            <h1>Redux weather app</h1>
          </div>
          <div className="weather">
            {isLoading ? (
              <span className="loader"></span>
            ) : (
              <div className="weather__container">
                {error ? (
                  <>
                    <div className="weather__card">
                      <h3>There was an error, try again using another city.</h3>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="weather__card">
                      <img src={`${currentCity.icon}`} alt="" />
                      <h3>{currentCity.cityName}</h3>
                      <p>Condition: {currentCity.condition}</p>
                      <h4>{currentCity.temperature} °C</h4>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="row my-3">
          <form onSubmit={handleSubmit(onNewCity)}>
            <input
              type="text"
              className="form-control"
              {...register("city")}
              placeholder="Write any city"
            />
            <button className="btn mt-3">Search</button>
          </form>
        </div>
      </div>
    </Header>
  );
};
