import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return(
    <div className="Weather-Info">
        <div className="row">
        <div className="card text-bg-dark mb-3 col-3 m-4">
            <h1 className="city p-3 m-1 text-white">{props.data.defaultCity}</h1>
            <span className= "date">
              <FormattedDate date={props.data.date}/>
            </span>
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
            <span className="temperature">{props.data.temperature}</span>{" "}
            <span className="units">
              <a href="#" rel="noopener noreferrer"className="fahrenheit">
                F
              </a>{" "}
            | {" "}
              <a href="#" rel="noopener noreferrer" className="celsius">
               {props.data.temperature} C
              </a>{" "}
            </span>
          </div>
      </div>
      <div className="card text-bg-dark mb-3 m-2 p-4 col-5">
        <div className="icon">
          <img src={props.data.iconUrl} alt={props.data.description}/>
        </div>
      </div>
      </div>
      <div className="card text-bg-dark mb-3 m-2 p-4 col-10">
        <div className="row">
          <ul className="other-temperature-information p-3">
            <li className="description">Description:{props.data.description}</li>
            <li className="humidity">Humidity:{props.data.humidity}%</li>
            <li className="wind">Wind:{props.data.wind}km/h</li>
            <li className="feels-like">Feels Like:{props.data.feels_like}</li>
          </ul>
      </div>
      </div>
    </div>
    ); 
}
    