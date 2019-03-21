import { CREATE_ENTRY, EDIT_ENTRY, DELETE_ENTRY } from './types/posts.types'

export const createEntry = post => dispatch => {
  dispatch ({
    type: CREATE_ENTRY,
    payload: post
  })
}