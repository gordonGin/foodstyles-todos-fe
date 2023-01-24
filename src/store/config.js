import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

export default function setupStore(preloadedState = {}) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    preloadedState,
  });

  return store;
}
