import { combineReducers } from 'redux';

import deviceReducer from './reducers/device.reducer';

const rootReducer = combineReducers({
  device: deviceReducer
})

export default rootReducer;