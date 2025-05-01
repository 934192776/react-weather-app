import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Weather from "./Weather";
import WeatherInfo from "./WeatherInfo";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <WeatherInfo temperature={25} condition="Sunny" location="New York" />
        <Weather defaultCity="New York" />
        <WeatherInfo temperature={25} condition="Sunny" location="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/934192776"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jing Hui
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/934192776/Vanilla-Weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://voluble-churros-35a51f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}