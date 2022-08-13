import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
          
    useEffect(() => {
     const fetchApi = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bfd09b1fc03c8f894fbc8a0e9a6ce530`
        const response = await fetch(url);
        const resJson = await response.json();
        console.log(resJson);
        setCity(resJson);
     };

     fetchApi(); 
    },[search] )
    
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input 
                    type="search"
                    value={search}
                    className="inputField"
                    onChange={ (event) => {setSearch(event.target.value) }} />
                </div>
        
                {!city ? (
                    <p className="errorMsg">No Data Found</p>
                ) : (
                    <div>
                      <div className="info">
                <h2 className="location">
                <i className="fas fa-street-view"> </i>{search}
                </h2>
                <h1 className="temp">
                {city?.main?.temp}℃el
                </h1>
                <h3 className="tempmin_max"> Min :{city?.main?.temp_min}℃el | Max :{city?.main?.temp_max}℃el</h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
                )}
               
        
             </div>
        </>
    )
}

export default Tempapp;




