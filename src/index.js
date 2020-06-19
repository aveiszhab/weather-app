import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { location } from './data/forecast.json';

ReactDOM.render(
    <App location={location}/>,
    document.getElementById('root')
);

