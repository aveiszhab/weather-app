import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastDetails = (props) => {
    console.log(props)
    return(
        <>
            <div className='forecast-details'>
                <div className='date'>
                    {moment(props.forecast.date).format('ddd do MMM')}
                </div>
                <div className='temperatureMax'>
                    {props.forecast.temperature.max}&deg;c
                </div>
                <div className='temperatureMin'>
                    {props.forecast.temperature.min}&deg;c
                </div>
                <div className='humidity'>
                    {props.forecast.humidity}
                </div>
                <div className='wind'>
                    {props.forecast.wind.speed} {props.forecast.wind.direction}
                </div>

            </div>
        </>
    )
};

ForecastDetails.propTypes = {
    forecast: PropTypes.object.isRequired
};

export default ForecastDetails;