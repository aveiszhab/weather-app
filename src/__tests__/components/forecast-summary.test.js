import React from 'react';
import { render } from '@testing-library/react';
import ForecastSummary from '../../components/forecast-summary';


describe('ForecastSummary', () => {
    it('renders correctly to match ForecastSummary snapshot', () => {
        const { asFragment } = render(
            <ForecastSummary
                date={123134}
                temperature={11}
                description='mockDescription'
                icon='200'
            />
        );
        
        expect(asFragment()).toMatchSnapshot();
    });

    
    it('renders the correct date, temperature, description and icon props', () => {
        const { getByTestId } = render(
            <ForecastSummary
                date={123134}
                temperature={11}
                description='mockDescription'
                icon='200'
        />
        );

        expect(getByTestId('date-id')).toHaveClass('date');
        expect(getByTestId('temperature-id')).toHaveClass('temperature');
        expect(getByTestId('description-id')).toHaveClass('description');
        expect(getByTestId('icon-id')).toHaveClass('icon');

    });
    
});