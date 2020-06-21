import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ForecastDetails from './forecast-details'
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import SearchForm from './search-form';

import '../styles/app.css';

const App = () => {

    //API Request
    const [forecasts, setForecasts] = useState([]);
    const [location, setLocation] = useState({ city: '', country: ''});
    
    useEffect(() => {
                
        axios({
            method: 'GET',
            url:' https://mcr-codes-weather.herokuapp.com/forecast',
        }).then(res => {
            return (
                setLocation(res.data.location),
                setForecasts(res.data.forecasts)
            )
        })
    },[]);
    
    //Selected Forecast
    const [selectedDate, setSelectedDate] = useState(0);
    const selectedForecast = forecasts.find(
        forecast => forecast.date === selectedDate
    );
 
    const handleForecastSelect = (date) => {
        setSelectedDate(date);
    };

    //Searchbox
    const handleCitySelect = (city) => {
        const selectedCity = city.toLowerCase();
        
        axios({
            method: 'GET',
            url:` https://mcr-codes-weather.herokuapp.com/forecast`,
            params: {
                city: selectedCity
            }
        }).then(res => {
            return (
                setLocation(res.data.location),
                setForecasts(res.data.forecasts)
            )
            
        })
    };


    return(
    <div className='forecast'>
        <LocationDetails    
            city={location.city}
            country={location.country}
        />
        <SearchForm 
            onClick={handleCitySelect}
        />
        <ForecastSummaries 
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
         />
        {selectedForecast && <ForecastDetails forecast={ selectedForecast } />}
    </div>
)};

export default App;