import { createStore } from 'redux';

import rootReducer from '.';

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState
  )
}

export default configureStore;