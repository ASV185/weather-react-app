import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const[weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature: response.data.temperature,
      date: new Date(response.data.dt * 1000),
      wind:response.data.wind.speed,
      city:response.data.name,
      description:response.data.condition.description,
      humidity:response.data.temperature.humidity,
      feels_like: response.data.temperature.feels_like,
      iconUrl:"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png"
    });
  
  }

  if(weatherData.ready){
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
              <span className= "date">
                <FormattedDate date={weatherData.date}/>
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
              <span className="temperature">{weatherData.temperature}</span>{" "}
              <span className="units">
                <a href="#" rel="noopener noreferrer"className="fahrenheit">
                  F
                </a>{" "}
              | {" "}
                <a href="#" rel="noopener noreferrer" className="celsius">
                 {weatherData.temperature} C
                </a>{" "}
              </span>
            </div>
        </div>
        <div className="card text-bg-dark mb-3 m-2 p-4 col-5">
          <div className="icon">
            <img src={weatherData.iconUrl} alt={weatherData.description}/>
          </div>
        </div>
        </div>
        <div className="card text-bg-dark mb-3 m-2 p-4 col-10">
          <div className="row">
            <ul className="other-temperature-information p-3">
              <li className="description">Description:{weatherData.description}</li>
              <li className="humidity">Humidity:{weatherData.humidity}%</li>
              <li className="wind">Wind:{weatherData.wind}km/h</li>
              <li className="feels-like">Feels Like:{weatherData.feels_like}</li>
            </ul>
        </div>
        </div>
      </div>
    );
  }else {
    const apiKey= "6a8co22f6f92bdd5a654001ta38ff409";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    
  }
}
