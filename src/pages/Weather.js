import React, { useState, useEffect } from "react";

import "../styles.css";

function Weather() {

  const [darkMode, setDarkMode] = useState(false);

  const [city, setCity] = useState("");

  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // YOUR API KEY

  const apiKey = "0df819c22e1d7edc9bd9d6c88cd81d68";

  // FETCH WEATHER BY CITY

  const fetchWeather = async (location) => {

    try {

      setLoading(true);

      setError("");

      const response = await fetch(

        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );

      const data = await response.json();

      if(data.cod === "404"){

        setError("Location Not Found ❌");

        setWeather(null);

      } else {

        setWeather(data);
      }

      setLoading(false);

    } catch {

      setLoading(false);

      setError("Something went wrong ❌");
    }
  };

  // CURRENT LOCATION

  const getCurrentLocation = () => {

    navigator.geolocation.getCurrentPosition(

      async(position) => {

        const lat = position.coords.latitude;

        const lon = position.coords.longitude;

        setLoading(true);

        const response = await fetch(

          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        setWeather(data);

        setLoading(false);
      }
    );
  };

  // LOAD CURRENT LOCATION WEATHER

  useEffect(() => {

    getCurrentLocation();

  }, []);

  return (

    <div className={darkMode ? "weather-page dark" : "weather-page"}>

      {/* THEME BUTTON */}

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

      {/* BLOBS */}

      <div className="blob blob1"></div>

      <div className="blob blob2"></div>

      {/* WEATHER CARD */}

      <div className="weather-card">

        {/* LOGO */}

        <div className="weather-logo">
          🌦
        </div>

        <h1>Weather App</h1>

        {/* SEARCH */}

        <div className="weather-search">

          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
            className="weather-input"
          />

          <button
            className="weather-btn"
            onClick={() =>
              fetchWeather(city)
            }
          >
            Search
          </button>

        </div>

        {/* CURRENT LOCATION */}

        <button
          className="location-btn"
          onClick={getCurrentLocation}
        >
          📍 Use Current Location
        </button>

        {/* LOADING */}

        {loading && (

          <p className="loading-text">
            Loading Weather...
          </p>

        )}

        {/* ERROR */}

        {error && (

          <p className="error-text">
            {error}
          </p>

        )}

        {/* WEATHER DATA */}

        {weather && (

          <div className="weather-info">

            <h2>
              {weather.name},
              {" "}
              {weather.sys.country}
            </h2>

            <img
              src={
                `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
              }
              alt="weather"
            />

            <h1 className="temp">
              {Math.round(weather.main.temp)}°C
            </h1>

            <p className="condition">
              {weather.weather[0].main}
            </p>

            {/* DETAILS */}

            <div className="weather-details">

              <div className="detail-card">

                <h3>Humidity</h3>

                <p>
                  {weather.main.humidity}%
                </p>

              </div>

              <div className="detail-card">

                <h3>Wind</h3>

                <p>
                  {weather.wind.speed} km/h
                </p>

              </div>

              <div className="detail-card">

                <h3>Feels Like</h3>

                <p>
                  {Math.round(weather.main.feels_like)}°C
                </p>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Weather;