import { combineReducers } from 'redux';

import devicesReducer from './reducers/device.reducer';
import postsReducer from './reducers/posts.reducer';
import themeReducer from './reducers/theme.reducer';

const rootReducer = combineReducers({
  devices: devicesReducer,
  posts: postsReducer,
  theme: themeReducer
})

export default rootReducer;