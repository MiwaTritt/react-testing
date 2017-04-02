import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/layout/layout.component';
import RegistrationForm from './components/registration-form/registration-form.component';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={RegistrationForm}/>
  </Route>
);

export default routes;