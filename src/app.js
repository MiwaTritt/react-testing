import React from 'react';
import ReactDOM from 'react-dom';

import './static/styles/styles.scss';
import 'font-awesome/css/font-awesome.css';

//material ui imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import 'bootstrap/dist/css/bootstrap.css';

import AppRoutes from './components/app-routes';

window.onload = () => {
    ReactDOM.render(
    <MuiThemeProvider>
        <AppRoutes/>
    </MuiThemeProvider>, document.querySelector('main'));
};