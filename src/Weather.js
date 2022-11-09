import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  return (
    <div className="Weather">
      <div class="container">
        <form class="search-function" id="search-form">
          <div class="row locationRow">
            <div class="col-8">
              <input
                type="search"
                placeholder="Type a City"
                class="form-control"
                id="search-text-input"
                autofocus
              />
            </div>
            <div class="col-2">
              <button
                class="btn btn-primary w-100 searchButton hoverNow"
                type="submit"
                id="search-button"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-2">
        <span>
          {" "}
          <button
            type="button"
            class="btn btn-secondary w-100 currentButton hoverNow"
            value="submit"
            id="current-button"
          >
            Current
          </button>{" "}
        </span>
      </div>
      <h1>
        <div class="location">
          <span class="city" id="city"></span>
          <div class="country" id="country"></div>
        </div>
      </h1>
      <p>
        Monday 15:35
        <span id="description"> Partly Cloudy</span>
      </p>
      <h2>
        <div class="row">
          <div class="col-4 current-temperature" id="current-temperature">
            <span class="temperature" id="temperature"></span>
            <div class="degrees" id="degrees">
              <a href="/" id="celsius-link" class="active">
                °c
              </a>{" "}
              |
              <a href="/" id="fahrenheit-link">
                °f
              </a>
            </div>
          </div>
          <div class="col-4">
            <div class="icon">
              <div class="description" id="description">
                {" "}
                Partly Cloudy{" "}
              </div>
              <img src="" alt="Clear" id="icon" class="float-left" />
            </div>
          </div>
          <div class="col-4 conditions">
            <em>
              <div class="feelsLike">
                Feels like: <strong id="feelsLike">3%</strong>°c
              </div>
              <div class="humidity">
                Humidity: <strong id="humidity">82%</strong>
              </div>
              <div class="wind">
                Wind:
                <strong id="wind">6 mph</strong>
              </div>
            </em>
          </div>
        </div>
      </h2>
      <div class="forecast">5 Day Forecast</div>
      <div class="weather-forecast" id="weather-forecast">
        <div class="row">
          <div class="col Monday">
            Monday
            <div class="mon-Forecast">25°c</div>
            <i class="fa-solid fa-cloud-sun icons"></i>
          </div>
          <div class="col Tuesday">
            Tuesday
            <div class="tue-Forecast">26°c</div>
            <i class="fa-solid fa-cloud icons"></i>
          </div>
          <div class="col Wednesday">
            Wednesday
            <div class="wed-Forecast">29°c</div>
            <i class="fa-solid fa-cloud icons"></i>
          </div>
          <div class="col Thursday">
            Thursday
            <div class="thu-Forecast">31°c</div>
            <i class="fa-solid fa-sun icons"></i>
          </div>
          <div class="col Friday">
            Friday
            <div class="fri-Forecast">30°c</div>
            <i class="fa-solid fa-cloud-sun icons"></i>
          </div>
        </div>
      </div>
      <div class="source-code">
        <a href="https://github.com/CyraIftikhar/weather-react">
          Open-source code
        </a>{" "}
        by Cyra Iftikhar
      </div>
    </div>
  );
}
