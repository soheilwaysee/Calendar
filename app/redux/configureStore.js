import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { DEV } from 'config';
import reducer from 'redux/reducers/rootReducer';

const middlewares = [];

const composeEnhancers = DEV ? composeWithDevTools : compose;
export default function configureStore(initialState = {}) {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}
