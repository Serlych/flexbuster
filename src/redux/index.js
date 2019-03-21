import { combineReducers } from 'redux';

import devicesReducer from './reducers/device.reducer';
import postsReducer from './reducers/posts.reducer';

const rootReducer = combineReducers({
  devices: devicesReducer,
  posts: postsReducer
})

export default rootReducer;