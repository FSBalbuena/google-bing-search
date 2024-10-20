import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import allReducers from './reducers';

const allMiddlewares = [thunk];
if (process.env.REACT_APP_ENV === 'develop') {
  allMiddlewares.push(logger);
}
/**
 * createStoreWithMiddlewares is used on tests
 */
export const createStoreWithMiddlewares = applyMiddleware(...allMiddlewares)(
  createStore
);

export default createStoreWithMiddlewares(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
