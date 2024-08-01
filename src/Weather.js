import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

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
        <WeatherInfo data={weatherData}/>
      </div>
    );
  }else {
    const apiKey= "6a8co22f6f92bdd5a654001ta38ff409";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    
  }
}
