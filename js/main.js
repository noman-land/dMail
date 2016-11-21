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
import MailboxContainer from './containers/MailboxContainer';
import MessageFullContainer from './containers/MessageFullContainer';
import DraftsContainer from './containers/DraftsContainer';
import InboxContainer from './containers/InboxContainer';
import SettingsContainer from './containers/SettingsContainer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/inbox" />
        <Route path="/inbox" component={MailboxContainer}>
          <IndexRoute component={InboxContainer} />
          <Route path="/drafts" component={DraftsContainer} />
          <Route path="/drafts/:messageId" component={MessageFullContainer} />
          <Route path="/inbox/:messageId" component={MessageFullContainer} />
        </Route>
        <Route path="/settings" component={SettingsContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
