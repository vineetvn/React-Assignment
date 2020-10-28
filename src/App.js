import React from 'react';

import '../src/Styles/App.css';
import {Provider} from 'react-redux'

import Router from './Router/Router';
import {store} from './Store/Store';
import {withRouter} from 'react-router-dom'

function App() {
  return (
    <Provider store= {store}>
        <div>
          <Router />
        </div>
    </Provider>
  );
}

export default withRouter(App);
