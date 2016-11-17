// Styles
import '../sass/style.sass';

// React/Redux/Router
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, Redirect, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import rootReducer from './reducers/rootReducer';

// Components
import App from './components/App';
import Inbox from './components/inbox/Inbox';
import IPFSSettings from './components/IPFSSettings';
import EthereumSettingsContainer from './containers/EthereumSettingsContainer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="inbox" />
        <Route path="ethereum/settings" component={EthereumSettingsContainer} />
        <Route path="ipfs/settings" component={IPFSSettings} />
        <Route path="inbox" component={Inbox} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
