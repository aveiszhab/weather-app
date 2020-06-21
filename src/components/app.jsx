import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ForecastDetails from './forecast-details'
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';

import '../styles/app.css';

const App = () => {

    const [forecasts, setForecasts] =useState([]);
    const [location, setLocation] = useState({ city: '', country: ''});
    const [selectedDate, setSelectedDate] = useState(0);

    useEffect(() => {
                
        axios({
            method: 'GET',
            url:'https://mcr-codes-weather.herokuapp.com/forecast?city=London'
        }).then(res => {
            return (
                setLocation(res.data.location),
                setForecasts(res.data.forecasts)
            )
        })
    });
    
    const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);
 
    const handleForecastSelect = (date) => {
        setSelectedDate(date);
    } 


    return(
    <div className='forecast'>
        <LocationDetails    
            city={ location.city }
            country={ location.country }
        />
        <ForecastSummaries 
            forecasts={ forecasts }
            onForecastSelect={ handleForecastSelect }
         />
        {selectedForecast && <ForecastDetails forecast={ selectedForecast } />}
    </div>
)};

export default App;