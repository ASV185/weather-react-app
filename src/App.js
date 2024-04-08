import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div classsName="container">
        <header className="App-header">
          <Weather />
        </header>
        <footer>
          This project was coded by{" "}
          <a href="https://amandaventura.netlify.app/">Amanda Ventura</a> and is{" "}
          <a href="https://github.com/ASV185/weather-react-app">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
