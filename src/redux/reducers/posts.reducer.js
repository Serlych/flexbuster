import { CREATE_ENTRY, EDIT_ENTRY, UPDATE_ENTRY, DELETE_ENTRY } from '../actions/types/posts.types';
import { getNewState, getDate } from '../../shared/utils/frontend.util';

const initialState = {
  posts: [],
  editingPost: 0
}

const PostsReducer = (prevState = initialState, action) => {
  
  switch (action.type) {
    
    case CREATE_ENTRY: {
      return {
        ...prevState,
        posts: [action.payload, ...prevState.posts]
      }
    }
    
    case EDIT_ENTRY: {
      return {
        ...prevState,
        editingPost: action.payload
      }
    }
      
    case UPDATE_ENTRY: {
      let updatedEntry = getNewState(prevState.posts.find(post => post.id === prevState.editingPost))
      updatedEntry.title = action.payload.title
      updatedEntry.body = action.payload.body
      updatedEntry.dateModified = getDate()
      
      let updatedArray = Array.from(prevState.posts)
      updatedArray.splice(prevState.posts.findIndex(post => post.id === prevState.editingPost), 1, updatedEntry)
  
      return {
        ...prevState,
        editingPost: 0,
        posts: updatedArray
      }
    }
      
    case DELETE_ENTRY: {
      return {
        ...prevState,
        posts: prevState.posts.filter(post => post.id !== action.payload)
      }
    }
    
    default: {
      return prevState
    }
  }
}

export default PostsReducer;