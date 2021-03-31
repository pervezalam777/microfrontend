import { createStore } from 'redux'

// Define the Reducers that will always be present in the application
const staticReducers = {
  users: usersReducer,
}

// Add a dictionary to keep track of the registered async reducers
const asyncReducers  = {}

// Configure the store
export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState)

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

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
}