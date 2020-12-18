import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeroDetailPage from './HeroDetailPage';
import HeroListPage from './HeroListPage';


 const Routes = () => (
    <Switch>
        <Route path="/heroes/:name" component={HeroDetailPage} />
        <Route path="/heroes" component={HeroListPage} />

    </Switch>
);


export default Routes;
