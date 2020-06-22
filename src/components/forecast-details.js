import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import '../styles/forecast-details.css'


const ForecastDetails = (props) => {
    
    return(
        <div className='forecast-details'>
            <div className='date'>
                {moment(props.forecast.date).format('ddd Do MMM')}
            </div>
            <div className='temperatureMax'>
                Max Temperature: {props.forecast.temperature.max}&deg;c
            </div>
            <div className='temperatureMin'>
                Min Temperature: {props.forecast.temperature.min}&deg;c
            </div>
            <div className='humidity'>
                Humidity: {props.forecast.humidity}%
            </div>
            <div className='wind'>
                Wind: {props.forecast.wind.speed}mph {props.forecast.wind.direction}
            </div>

        </div>
    )
};

ForecastDetails.propTypes = {
    forecast: PropTypes.object.isRequired
};

export default ForecastDetails;