import React from 'react';
import PropTypes from 'prop-types';
import ForecastDetails from './forecast-details'

import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';

import '../styles/app.css';

const App = (props) => {
 
    return(
    <div className='forecast'>
        <LocationDetails 
            city={ props.location.city }
            country={ props.location.country }
        />
        <ForecastSummaries forecasts={props.forecasts} />
        <ForecastDetails forecast={props.forecasts[0]} />
    </div>
)};

App.propTypes = {
    location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
    forecasts: PropTypes.array.isRequired
};

export default App;