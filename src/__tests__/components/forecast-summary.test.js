import React from 'react';
import { render } from "@testing-library/react";
import ForecastSummary from '../../components/forecast-summary';


describe('ForecastSummary', () => {
    it('renders the correct date, temperature, description and icon props', () => {
        const {asFragment} = render(
            <ForecastSummary
                date={123134}
                temperature={11}
                description='mockDescription'
                icon='mockIcon'
            />
        );
        
        expect(asFragment).toMatchSnapshot();
    });

    
    it('renders the correct date, temperature, description and icon props', () => {
        const { getByText } = render(
            <ForecastSummary
                date={123134}
                temperature={11}
                description='mockDescription'
                icon='mockIcon'
        />
        );

        expect(getByText('123134')).toHaveClass('date');
        expect(getByText('11°c')).toHaveClass('temperature');
        expect(getByText('mockDescription')).toHaveClass('description');
        expect(getByText('mockIcon')).toHaveClass('icon');

    });
    
});