import React from 'react';
import ReactDOM from 'react-dom';

import './static/styles/styles.scss';
import 'font-awesome/css/font-awesome.css';


import AppRoutes from './components/app-routes';

window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.querySelector('main'));
};