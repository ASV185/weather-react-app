import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
      <div className="col-3">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
          />
       </div>
       <div className="col-2">
          <input type="submit" value="Search" className="btn-primary" />
        </div> 
      </div>
      <div className="row">
        <div className="card text-bg-dark mb-3 col-3 m-4">
            <h1 className="city p-3 m-1 text-white">El Paso</h1>
        </div>
        <div className="card text-bg-dark mb-3 col-3 m-4">
            <div className="my-current-location text-center">
              My current location
            </div>
        </div>
      </div>
      <div className="row"> 
          <div className="card text-bg-dark mb-3 m-2 p-4 col-5">
          <div className="temperature-information ">
            <span className="temperature">18</span>{" "}
            <span className="units">
              <a href={"#"} className="fahrenheit">
                F
              </a>{" "}
            | {" "}
              <a href={"#"} className="celsius">
                C
              </a>{" "}
            </span>
          </div>
      </div>
      <div className="card text-bg-dark mb-3 m-2 p-4 col-5">
        <div className="icon">Icon</div>
      </div>
      </div>
      <div className="card text-bg-dark mb-3 m-2 p-4 col-10">
        <div className="row">
          <ul className="other-temperature-information p-3">
            <li className="description">Description:</li>
            <li className="humidity">Humidity:</li>
            <li className="wind">Wind:</li>
          </ul>
      </div>
      </div>
    </div>
  );
}
