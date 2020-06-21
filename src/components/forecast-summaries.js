import React from 'react';
import PropTypes from 'prop-types';

import ForecastSummary from './forecast-summary';

import '../styles/forecast-summaries.css'

const ForecastSummaries = (props) => {
   
    return(
    <div className='forecast-summaries'>
        {props.forecasts.map(forecast => (
            <ForecastSummary 
                key={forecast.date}
                date={forecast.date}
                temperature={forecast.temperature.max}
                description={forecast.description}
                icon={forecast.icon}
                onSelect={props.onForecastSelect}
            />
        ))}
    </div>
)};

ForecastSummaries.propTypes ={
    forecasts: PropTypes.array.isRequired,
}

export default ForecastSummaries;