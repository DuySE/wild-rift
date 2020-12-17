import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import configStore from './stores';
import Routes from './pages';

const history = createBrowserHistory();

const { store } = configStore();

function App() {
  return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
  );
}

export default App;