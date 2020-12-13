import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeroesPage from './heroes';

 const Routes = () => (
    <Switch>
<Route path="/" component={HeroesPage} />
</Switch>
);

export default Routes;
