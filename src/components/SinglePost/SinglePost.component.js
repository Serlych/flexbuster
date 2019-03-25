import React, { useState, Fragment } from 'react';
import injectSheet from 'react-jss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TextareaAutosize from 'react-autosize-textarea';

import { editEntry, deleteEntry, updateEntry } from '../../redux/actions/posts.action';

import SinglePostStyles from './SinglePost.styles';

const SinglePost = props => {

  const { posts, classes, editEntry, deleteEntry, updateEntry } = props
  
  const [postToEdit, setPost] = useState({ title: '', body: '' })
  
  const handleChange = ({ target: { name, value } }) => {
    setPost({ ...postToEdit, [name]: value })
  }
  
  const handleSubmit = () => {
    updateEntry(postToEdit)
  }
  
  const handleEdit = ({title, body, id}) => {
    setPost({ title, body })
    editEntry(id)
  }
  
  return (
    <Fragment>
      {
        posts.posts.map((post, index) => (
          <div className={classes.singlePostContainer} key={index}>
            {
              posts.editingPost === post.id
                ? <div className={classes.singlePostEditTitle}>
                    <input onChange={handleChange} name='title' defaultValue={post.title} placeholder='Edit this title...' />
                  </div>
                : <div className={classes.singlePostTitle}>{post.title}</div>
            }
            <div className={classes.singlePostButtons}>
              <i className='fas fa-edit' onClick={() => handleEdit(post)}/>
              <i className='fas fa-trash' onClick={() => deleteEntry(post.id)} />
            </div>
            {
              posts.editingPost === post.id
                ? <div className={classes.singlePostEditContent}>
                    <TextareaAutosize onChange={handleChange} name='body' defaultValue={post.body} placeholder='Edit the post content...' />
                  </div>
                : <div className={classes.singlePostContent}>{post.body}</div>
            }
            {
              posts.editingPost === post.id
                ? <div className={classes.singlePostSubmitButton}>
                    <button onClick={() => handleSubmit(post.title, post.body)}>Accept</button>
                  </div>
                : <div className={classes.singlePostDate}>
                    <div>Created on: <b>{post.dateCreated}</b></div>
                    <div>Modified on: <b>{post.dateModified}</b></div>
                  </div>
            }
          </div>
        ))
      }
    </Fragment>
  )
}

const StyledSinglePost = injectSheet(SinglePostStyles)(SinglePost);

const mapStateToProps = state => ({ posts: state.posts });
const mapDispatchToProps = dispatch => bindActionCreators({ editEntry, deleteEntry, updateEntry }, dispatch);

const ReducedSinglePost = connect(mapStateToProps, mapDispatchToProps)(StyledSinglePost);
export default ReducedSinglePost;