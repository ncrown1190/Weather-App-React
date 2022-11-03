import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CountryDetails from "./WeatherForecast";

export default function NavPage() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}
