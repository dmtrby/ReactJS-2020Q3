import { createStore, applyMiddleware } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return reducers(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunk]));
};

export const wrapper = createWrapper(initStore);