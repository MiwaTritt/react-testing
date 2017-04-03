import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './layout/layout.container';
import RegistrationFormContainer from './registration-form/registration-form.container';

const routes = (

  <Route path="/" component={Layout}>
    <IndexRoute component={RegistrationFormContainer}/>
    <Route path="form" component={RegistrationFormContainer}/>
  </Route>
);

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
        );
    }
}




