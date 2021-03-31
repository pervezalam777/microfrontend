import { configureStore, combineReducers } from '@reduxjs/toolkit'

import userReducer from './userReducer';

const preloadedState = {}

const staticReducers = {
  user: userReducer
}

// Add a dictionary to keep track of the registered async reducers
const asyncReducers  = {}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
}

// Configure the store
function storeSetup() {
  
  // The store now has redux-thunk added and the Redux DevTools Extension is turned on
  const store = configureStore({ 
    reducer: createReducer(),
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
  })

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(asyncReducers))
  }

  store.withdrawReducer = (key) => {
    if(asyncReducers[key]){
      delete asyncReducers[key];
      store.replaceReducer(createReducer(asyncReducers))
    }
  }

  // Return the modified store
  return store
}

export const store = storeSetup();

