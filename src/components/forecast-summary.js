import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = (props) => {
   
    return(
        <div className='forecast-summary'> 
            <div className='date' data-testid='date-id'>
                {moment(props.date).format('ddd Do MMM')}
            </div>
            <div className='temperature' data-testid='temperature-id'>
                {props.temperature}&deg;c
            </div>
            <div className='description' data-testid='description-id'>
                {props.description}
            </div>
            <div className="icon" data-testid="icon-id">
                <WeatherIcon name="owm" iconId={props.icon} />
            </div>
            <button onClick={()=>props.onSelect(props.date)} >
                More Details
            </button>
        </div>
    )
};

ForecastSummary.propTypes = {
    forecast: PropTypes.shape({
        date: PropTypes.number.isRequired,
        temperature: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        onSelect:PropTypes.func.isRequired
    }),
    
};



export default ForecastSummary;