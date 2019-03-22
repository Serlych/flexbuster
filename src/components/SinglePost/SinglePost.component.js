import React, { Fragment } from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

import SinglePostStyles from './SinglePost.styles';

const SinglePost = props => {

  const { posts, classes } = props
  
  return (
    <Fragment>
      {
        posts.map((post, key) => (
          <div className={classes.singlePostContainer} key={key}>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <div>Created on: {post.dateCreated}</div>
            <div>Modified at: {post.dateModified}</div>
            <br/>
          </div>
        ))
      }
    </Fragment>
  )
}

const StyledSinglePost = injectSheet(SinglePostStyles)(SinglePost);

const mapStateToProps = state => ({ posts: state.posts.posts });
const mapDispatchToProps = () => ({});

const ReducedSinglePost = connect(mapStateToProps, mapDispatchToProps)(StyledSinglePost);
export default ReducedSinglePost;