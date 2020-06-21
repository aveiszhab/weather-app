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
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true); 
            setIsError(false);
       
            try {
                const result = await axios({
                    method: 'GET',
                    url:` https://mcr-codes-weather.herokuapp.com/forecast`,
                });
                setLocation(result.data.location);
                setForecasts(result.data.forecasts);
            } catch (error) {
              setIsError(error.message);
            }
       
            setIsLoading(false);
          };
       
          getData();
    }, []);
       
   
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
        
        const getData = async () => {
            setIsLoading(true); 
            setIsError(false);
       
            try {
                const result = await axios({
                    method: 'GET',
                    url:` https://mcr-codes-weather.herokuapp.com/forecast`,
                    params: {
                        city: selectedCity
                    }
                });
                setLocation(result.data.location);
                setForecasts(result.data.forecasts);
            } catch (error) {
              setIsError(error.message);
            }
       
            setIsLoading(false);
          };
       
          getData();
    };
   
    
    //Return section    
    if (isError === 'Request failed with status code 404') {
        return (
            <div className='404 error'>
                <div>Please pick a city from the Earth, even better, pick one from UK</div>
            </div>
        )
    } else if (isError === 'Request failed with status code 404') {
        return (
            <div className='any error'>
                <div>Ooooops ..... you know what to do</div>
            </div>
        )
    } else if(isLoading) {
        return (
            <div className='forecast'>
                <div>Loading ...</div>
            </div>
        )
    } else {
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
        )
    }
};

export default App;