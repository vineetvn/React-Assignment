import React from 'react';

import '../src/Styles/App.css';
import {Provider} from 'react-redux'

import Router from './Router/Router';
import {store} from './Store/Store';
import {withRouter} from 'react-router-dom'
import Header from './Common Components/Header/Header';
import Footer from './Common Components/Footer/Footer';

function App(props) {
  return (
    <Provider store= {store}>
        <>
          {(props.hitory.location.pathname === '/' || props.hitory.location.pathname === '/login') ? <Header /> : null}
          <Router />
          {(props.hitory.location.pathname === '/' || props.hitory.location.pathname === '/login') ? <Footer /> : null}
        </>
    </Provider>
  );
}

export default withRouter(App);
