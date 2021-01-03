import { Switch, Route } from 'react-router'
import HeroPicker from './HeroPicker'

function AppRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={HeroPicker} />
        <Route render={() => <div>404</div>} />
      </Switch>
    </>
  )
}

export default AppRoute
