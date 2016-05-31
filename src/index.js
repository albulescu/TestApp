import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import AppLayout from './components/AppLayout/AppLayout';
import Index from './components/Index/Index';
import NoMatch from './components/NoMatch/NoMatch';

require('./styles/app.less');

import configureStore from './store/configureStore';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={Index} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('appcontainer'));

