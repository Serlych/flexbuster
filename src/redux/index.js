import { combineReducers } from 'redux';

import device from './reducers/deviceReducer';

const rootReducer = combineReducers({
  device
})

export default rootReducer;