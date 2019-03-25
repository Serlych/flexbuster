import { CREATE_ENTRY, EDIT_ENTRY, UPDATE_ENTRY, DELETE_ENTRY } from './types/posts.types'

export const createEntry = post => dispatch => {
  dispatch ({
    type: CREATE_ENTRY,
    payload: post
  })
}

export const editEntry = id => dispatch => {
  dispatch ({
    type: EDIT_ENTRY,
    payload: id
  })
}

export const updateEntry = post => dispatch => {
  dispatch ({
    type: UPDATE_ENTRY,
    payload: post
  })
}

export const deleteEntry = id => dispatch => {
  dispatch ({
    type: DELETE_ENTRY,
    payload: id
  })
}