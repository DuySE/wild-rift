import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeroDetailPage from './HeroDetailPage';
import HeroListPage from './HeroListPage';
import BasePage from './BasePage'
import PickBoardPage from './PickBoardPage'
import ItemBuildPage from './ItemBuildPage'


const Routes = () => (
    <Switch>
        <Route path="/items" component={ItemBuildPage} />
        <Route path="/pick" component={PickBoardPage} />
        <Route path="/heroes/:name" component={HeroDetailPage} />
        <Route path="/heroes" component={HeroListPage} />
        <Route path="/" component={BasePage}/>
    </Switch>
);


export default Routes;
