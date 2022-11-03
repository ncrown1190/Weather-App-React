import axios from "axios";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InitCountryWeatherInfo } from "../models/CountryWeather";
import { InitCountry } from "../models/Interface";
import "./WeatherForecast.css";

type InitiProps = {
  name: string;
};

export default function CountryDetails() {
  const { name } = useParams<InitiProps>();
  const [countryInfo, setCountryInfo] = useState<InitCountry>();
  const [capitalName, setCapitalName] = useState("");
  const [weatherInfo, setWeatherInfo] = useState<InitCountryWeatherInfo>();
  const [countryApiError, setCountryApiError] = useState<Boolean>(false);
  const [weatherApiError, setWeatherApiError] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const navigate = useNavigate();

  const getCountryData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = response.data;
      setCountryInfo(data[0]);
      setCapitalName(data[0].capital[0]);
    } catch (error) {
      setCountryApiError(true);
    }
  }, [name]);

  useEffect(() => {
    getCountryData();
  }, [getCountryData]);

  const getWeatherDetails = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=60774ad1b455f3cff7d3f8a273f488f5&query=${capitalName}`
      );
      const data = response.data;
      setWeatherInfo(data.current);
      setLoading(false);
    } catch (error) {
      setWeatherApiError(true);
    }
  };

  const getBackToHome = (e: FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <h1 className="head">Country Details</h1>

        {countryInfo ? (
          <div className="country-info">
            {/* <small>Country Flag : </small> */}
            <img src={countryInfo.flags.svg} height="70px" alt="" />
            <p className="capital">Capital: {countryInfo.capital[0]}</p>
            <p className="population">Population: {countryInfo.population}</p>
            <p>
              Latitude: {countryInfo.latlng[0]}
              <sup>o</sup>
            </p>
            <p>
              Longitude: {countryInfo.latlng[1]}
              <sup>o</sup>
            </p>

            <button onClick={getWeatherDetails}>Capital Weather</button>
          </div>
        ) : (
          <div className="err">
            {" "}
            {countryApiError ? (
              <>
                <h3>Country info not found!</h3>
                <div className="errbtn">
                  <button onClick={getBackToHome}>Please try again</button>
                </div>
              </>
            ) : (
              "Loading..."
            )}
          </div>
        )}

        {weatherInfo ? (
          <div className="weather-content">
            <h3>Weather Info</h3>
            <img src={weatherInfo.weather_icons[0]} alt="Weather Icon" />
            <p>
              Temperature: {weatherInfo.temperature}
              <sup>o</sup>
            </p>
            <p>Wind Speed: {weatherInfo.wind_speed}</p>
            <p>Precip: {weatherInfo.precip}</p>
            {/* <p>{weatherInfo.lat}</p>
            <p>{weatherInfo.long}</p> */}
          </div>
        ) : (
          <div>
            {weatherApiError ? (
              <h4>Weather info not found. Please try again!</h4>
            ) : (
              <p>{loading ? "Loading..." : ""}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
