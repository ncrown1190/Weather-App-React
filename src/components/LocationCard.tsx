import { WeatherInfo } from "../models/CountryWeather";
import "./LocationCard.css";

interface Props {
  singleLocationCard: WeatherInfo;
}
export default function LocationCard({ singleLocationCard }: Props) {
  return (
    <div className="locContainer">
      <div className="naz">
        <h3>Weather Info</h3>
        <h2>{singleLocationCard.location.name}</h2>
        <h2>{singleLocationCard.location.country}</h2>
        <h2>{singleLocationCard.location.lat}</h2>
        <h2>{singleLocationCard.location.lon}</h2>
        <h2>{singleLocationCard.current.temperature}</h2>
        <h2>{singleLocationCard.current.humidity}</h2>
        <h2>{singleLocationCard.current.weather_code}</h2>
        <h2>{singleLocationCard.current.observation_time}</h2>
        <h2>{singleLocationCard.current.precip}</h2>
      </div>
    </div>
  );
}
