import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'
import history from '../utils/createHistory'
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router'

export default function configureAppStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware({})
  const routerMiddleware = createRouterMiddleware(history)
  const { run: runSaga } = sagaMiddleware

  const middlewares = [sagaMiddleware, routerMiddleware]
  const enhancers = []

  const store = configureStore({
    reducer: rootReducer(history),
    middleware: [
      ...getDefaultMiddleware({
        thunk: false,
      }),
      ...middlewares,
    ],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  })

  runSaga(rootSaga)

  return store
}
