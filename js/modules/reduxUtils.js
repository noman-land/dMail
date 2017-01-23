import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState, history, ...middlewares) {
  const reduxRouterMiddleware = routerMiddleware(history);
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        reduxRouterMiddleware,
        ...middlewares
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ),
  );
};
