import React, { useState } from 'react'
import './getweather.css'
import dexter from '../components/images/dexter.png'

export default function Getweather() {
  // let [mycity, setName] = useState(null);
  // let city = "ahmedabad"
  let key = "3a1c07ac135d4ae2c885291907a9a8a0"


  function cityChange() {
    const cityId = document.getElementById("city").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=${key}`)
      .then(res => res.json())
      .then(function (res) {

        console.log(res)
        // console.log(res)

        function displayWeather(x) {
          let weather = document.getElementById("weather")
          weather.innerText = x

        }
        if (cityId === "" || res.cod === "404") {
          displayWeather("enter valid city")
        }
        else {
          displayWeather(`weather details of city: ${res.name} 

          Current Temprature :${res.main.temp}°C
          Temprature range :${res.main.temp_min}°C to ${res.main.temp_max}°C
           Humidity :${res.main.humidity}°C`)
        }
      })

    }
  return (
    <div className='getweather-maincontainer'>
      <div className='icons'>
        <img src={dexter} alt=''></img>
      </div>
      <div className='weather'>
        <input placeholder='Enter your city' onChange={cityChange} id="city" name="city"></input>
        <div id="weather"></div>

      </div>



    </div>
  )
}
