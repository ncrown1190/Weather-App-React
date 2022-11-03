import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./components/Home";
import NavPage from "./components/NavPage";
import WeatherByCity from "./components/WeatherByCity";
import WeatherBYLat from "./components/WeatherByLat";
//import CountryDetails from "./components/WeatherForecast";

function App() {
  return (
    <div className="App">
      <Router>
        <WeatherBYLat />
        {/* <NavPage /> */}
      </Router>
    </div>
  );
}

export default App;
