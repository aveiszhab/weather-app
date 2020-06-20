import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => {
    
    return(
<div className='forecast-summary'> 
<div><span className='date'>{props.date}</span></div>
<div ><span className='temperature'>{props.temperature}&deg;c</span></div>
<div ><span className='description'>{props.description}</span></div>
<div ><span className='icon'>{props.icon}</span></div>
</div>
)};

ForecastSummary.propTypes = {
    date: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired

}



export default ForecastSummary;