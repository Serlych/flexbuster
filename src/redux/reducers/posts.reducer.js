import { CREATE_ENTRY, EDIT_ENTRY, DELETE_ENTRY } from '../actions/types/posts.types';
import { getNewState } from '../../shared/utils/frontend.util';

const initialState = {
  posts: []
}

const PostsReducer = (prevState = initialState, action) => {
  
  switch (action.type) {
    
    case CREATE_ENTRY:
      return {
        ...prevState,
        posts: [action.payload, ...prevState.posts]
      }
    
    default:
      return prevState
  }
}

export default PostsReducer;