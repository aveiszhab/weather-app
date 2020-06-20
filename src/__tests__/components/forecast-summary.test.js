import React from 'react';
import { render } from '@testing-library/react';
import ForecastSummary from '../../components/forecast-summary';


describe('ForecastSummary', () => {
    it('renders correctly to match ForecastSummary snapshot', () => {
        const { asFragment } = render(
            <ForecastSummary
                date={1525046400000}
                temperature={11}
                description='mockDescription'
                icon='200'
            />
        );
        
        expect(asFragment()).toMatchSnapshot();
    });

    
    it('renders the correct date, temperature, description and icon props', () => {
        const { getByTestId, getByText} = render(
            <ForecastSummary
                date={1525046400000}
                temperature={11}    
                description='mockDescription'
                icon='200'
        />
        );

        expect(getByText('Mon 30th Apr')).toHaveClass('date');
        expect(getByText('11°c')).toHaveClass('temperature');
        expect(getByText('mockDescription')).toHaveClass('description');
        expect(getByTestId('icon-id')).toHaveClass('icon');

    });
    
});