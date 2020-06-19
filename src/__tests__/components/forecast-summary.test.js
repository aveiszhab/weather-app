import React from 'react';
import { render } from "@testing-library/react";
import ForecastSummary from '../../components/forecast-summary';


describe('ForecastSummary', () => {
    it('renders the correct date, temperature, description and icon props', () => {
        const {asFragment} = render(
            <ForecastSummary
                date='mockDate'
                temperature='mockTemperature'
                description='mockDescription'
                icon='mockIcon'
            />
        );
        
        expect(asFragment).toMatchSnapshot();
    });

    it('renders the correct date, temperature, description and icon props', () => {
        const { getByText } = render(
            <ForecastSummary
                date='mockDate'
                temperature='mockTemperature'
                description='mockDescription'
                icon='mockIcon'
        />
        );
        expect(getByText('mockDate')).toHaveClass('date');
        expect(getByText('mockTemperature°c')).toHaveClass('temperature');
        expect(getByText('mockDescription')).toHaveClass('description');
        expect(getByText('mockIcon')).toHaveClass('icon');

    });
    
});