import axios from "axios";
import { WeatherInfo } from "../models/CountryWeather";
import { Weather } from "../models/WInterface";

// const getCountryData = useCallback(async () => {
//     try {
//         const response = await axios.get(
//             `https://restcountries.com/v3.1/name/${name}`
//         );
//         const data = response.data;
//         setCountryInfo(data[0]);
//         setCapitalName(data[0].capital[0]);
//     } catch (error) {
//         setCountryApiError(true);
//     }
// }, [name]);
export function getByLocation(query?: string): Promise<WeatherInfo[]> {
  return axios
    .get<WeatherInfo[]>(
      "http://api.weatherstack.com/current?access_key=60774ad1b455f3cff7d3f8a273f488f5",
      {
        params: {
          query: query,
        },
      }
    )
    .then((res) => res.data);
}
export function getWeatherByCity(): Promise<Weather[]> {
  return axios
    .get<Weather[]>(
      "https://api.openweathermap.org/data/2.5/weather?q=Detroit&appid=cbfdc74a0de06ae92fb81257959c6869"
    )
    .then((res) => res.data);
}
