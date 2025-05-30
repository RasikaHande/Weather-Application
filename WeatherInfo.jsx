import React from 'react'
import './WeatherInfo.css'
const WeatherInfo = ({data,error}) => {
  //console.log(data);

  if(error)
  {
    return <p>Failed to fetch weather. please try again</p>
  }

  if(!data)
  {
    return null;
  }
  
  const getTimeForCity=(timezone)=>{
      const nowUTC=new Date().getTime()+new Date().getTimezoneOffset()*60000;
      const localtime=new Date(nowUTC+timezone*1000);
      return localtime.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})  
  };

  return (
    <div className="weather-info">
        <h2> Weather in {data.name} </h2>
        <p> Temperature : {Math.round(data.main.temp-273.15)}℃</p>
        <p> Weather : {data.weather[0].description}</p>
        <p> Local Time : {getTimeForCity(data.timezone)}</p>
    </div>
  )
}

export default WeatherInfo