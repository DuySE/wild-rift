import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ConnectedRouter } from 'connected-react-router'
import configStore from './store'
import history from './utils/createHistory'
import AppRoute from './pages'
import './App.css'

const store = configStore()

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <DndProvider backend={HTML5Backend}>
            <AppRoute />
          </DndProvider>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
