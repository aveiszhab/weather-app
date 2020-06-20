import React from 'react';
import { render } from '@testing-library/react';
import ForecastDetails from '../../components/forecast-details';

const mockForecast = {
    date: 1525046400000,
    temperature: { max: 11, min: 4 },
    humidity: 30,
    wind: { speed: 13, direction: "s" }
}

describe('ForecastDetails', () => {
    it('renders correctly to match ForecastDetails snapshot', () =>{
        const { asFragment } = render(
            < ForecastDetails forecast = { mockForecast } />
        );

        expect(asFragment()).toMatchSnapshot()
    });

    it('renders the correct date, temperature, humidity and wind props', () => {
        const { getByText} = render(
            <ForecastDetails forecast = { mockForecast } />
        );

        expect(getByText('Mon 30th Apr')).toHaveClass('date');
        expect(getByText('Max Temperature: 11°c')).toHaveClass('temperatureMax');
        expect(getByText('Min Temperature: 4°c')).toHaveClass('temperatureMin');
        expect(getByText('Humidity: 30%')).toHaveClass('humidity');
        expect(getByText('Wind: 13mph s')).toHaveClass('wind');

    });
    
});