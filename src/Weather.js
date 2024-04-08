import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
          />
        </div>
        <div className="col-2">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        <div className="col-2">Forecast</div>
        <div className="col-2">My current location</div>
      </div>
      <h1>El Paso</h1>
      <div className="row">
        <div className="col-4">18 F | C</div>
        <div className="col-4">Icon</div>
      </div>
      <div className="row">
        <ul>
          <li>Description:</li>
          <li>Humidity:</li>
          <li>Wind:</li>
        </ul>
      </div>
    </div>
  );
}
