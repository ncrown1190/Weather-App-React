import { getByLocation } from "../service/WeatherApiSer";
import { WeatherInfo } from "../models/CountryWeather";
import { useState } from "react";
import LocationCard from "./LocationCard";

export default function WeatherBYLat() {
  const [city, setCity] = useState<any>("");
  const [location, setLocation] = useState<WeatherInfo[]>([]);

  const submitHandler = (): void => {
    if (city) {
      getByLocation(city).then((data) => {
        // console.log(data);
        setLocation(data);
        console.log(data);
      });
    }
    setCity("");
  };

  return (
    <div>
      <form
        className="search=form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2 className="search">Weather</h2>
        <div className="searchInput">
          <input
            type="text"
            onChange={(e: any) => {
              setCity(e.target.value);
            }}
            value={city}
          />
          <button className="searchBtn" onClick={submitHandler}>
            Search Weather
          </button>
        </div>
      </form>
      <div>
        <div>
          {location.map((info, index) => (
            <LocationCard key={index} singleLocationCard={info} />
          ))}
        </div>
      </div>
    </div>
  );
}
