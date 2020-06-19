import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
<div className='forecastSummary'> 
<div><span className='date'>{props.date}</span></div>
<div ><span className='temperature'>{props.temperature}</span></div>
<div ><span className='description'>{props.description}</span></div>
<div ><span className='icon'>{props.icon}</span></div>
</div>
);

ForecastSummary.propTypes = {
    date: PropTypes.number.isRequired,
    temperature: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.symbol.isRequired

}



export default ForecastSummary;