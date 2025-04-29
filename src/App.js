import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
          <h1>Weather App</h1>
          
      <footer>
        This project was coded by {" "}
        <a 
          href="https://github.com/934192776" 
          target="_blank"
          rel="noopener noreferrer"
        > 
          Jing Hui
        </a>{" "}
        and is {" "}
        <a 
           href="https://github.com/934192776/Vanilla-Weather" 
           target="_blank"
           rel="noopener noreferrer"
          >
            open-sourced on GitHub
            </a> {" "}
        and {" "}
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

