import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeroDetailPage from './HeroDetailPage';
import HeroListPage from './HeroListPage';
import BasePage from './BasePage'
import PickBoardPage from './PickBoardPage'
import ItemBuildPage from './ItemBuildPage'
import ItemListPage from './ItemListPage'
import ItemCreatePage from './ItemCreatePage'
import ItemEditPage from './ItemEditPage'


const Routes = () => (
    <Switch>
        <Route path="/item-build/" component={ItemBuildPage} />
        <Route path="/items/create" component={ItemCreatePage} />
        <Route path="/items/edit/:name" component={ItemEditPage} />
        <Route path="/items" component={ItemListPage} />
        <Route path="/pick" component={PickBoardPage} />
        <Route path="/heroes/:name" component={HeroDetailPage} />
        <Route path="/heroes" component={HeroListPage} />
        <Route path="/" component={BasePage}/>
    </Switch>
);


export default Routes;
