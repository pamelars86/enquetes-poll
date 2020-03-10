import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  poll
} from './reducers';

import { reducer as formReducer } from 'redux-form';
import { createLogger } from 'redux-logger';


/* List of reducers */
const appReducer = combineReducers({
  poll,
  form: formReducer,
});

const middlewares = [];

if (process.env.REACT_APP_ENV === 'dev') {
  const loggerMiddleware = createLogger();

  middlewares.push(loggerMiddleware);
}


export default function configureStore(preloadedState) {
  return createStore(
    appReducer,
    applyMiddleware(thunk)
  );
}
