import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Admin from '../pages/Admin';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />

        <Route path="/Admin" exact component={Admin} isPrivate />
    </Switch>
);
export default Routes;
