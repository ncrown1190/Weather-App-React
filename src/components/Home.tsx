import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [countryName, setCountryName] = useState("");
  const navigate = useNavigate();

  const getCuntryName = async (e: FormEvent) => {
    e.preventDefault();
    navigate(`/details/${countryName}`);
  };

  return (
    <div>
      <div className="my-3">
        <h1 className="text-center">Weather App</h1>
        <input
          id="outlined-basic"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        {/* <textarea
          id="outlined-basic"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        /> */}
      </div>
      <div className="subtn">
        <button
          className="btn"
          disabled={countryName === ""}
          onClick={getCuntryName}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
