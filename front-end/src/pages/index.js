import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeroDetailPage from './HeroDetailPage';

 const Routes = () => (
    <Switch>
        <Route path="/heroes/:name" component={HeroDetailPage} />
    </Switch>
);


export default Routes;
