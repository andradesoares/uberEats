import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

export default function configureStore(initialState) {
  return createStore(reducers, initialState, compose(applyMiddleware(reduxThunk)));
}
