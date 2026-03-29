import React from "react";
import { useState,useEffect } from "react";
 function WeatherCard(){
    const[WeatherCard,SetWheatherCard]=useState(null);

    useEffect(()=>{
        fetch("https://api.open-meteo.com/v1/forecast?latitude=16.5062&longitude=80.6480&current_weather=true")
        .then((res)=>res.json())
        .then((data)=>SetWheatherCard(data.current_weather))
    },[])
    return(
        <div>
            <h1>Weather Details</h1>
            {WeatherCard&&(
                <div>
               <p> Temperature: {WeatherCard.temperature}</p>
               <p>WindSpeed: {WeatherCard.windspeed}</p>
                </div>
            )}
        </div>
    )
 } 
 export default WeatherCard;