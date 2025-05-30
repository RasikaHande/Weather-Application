import React, { useState } from 'react'
import './WeatherForm.css'
const WeatherForm = ({onFetchWeather}) => {
    const[city,setCity]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(city)
        {
            onFetchWeather(city);
            console.log("from weather form component",city);
            
            setCity("")
        }
    };
  return (
    <>
     <form onSubmit={handleSubmit} className="weather-form">
        <label htmlFor="city"> Enter City :</label>
        <input type="text" id='city' value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter city name'/>
        <button type='submit'> Get Weather </button>
     </form>
    </>
  )
}

export default WeatherForm

