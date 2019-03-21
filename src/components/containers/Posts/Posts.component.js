import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createEntry } from '../../../redux/actions/posts.action';

import PostsStyles from './Posts.styles'

class PostsComponent extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      body: '',
      dateCreated: new Date().toString(),
      dateModified: new Date().toString(),
    }
  }
  
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.createEntry(this.state)
  }
  
  render() {
    return (
      <div className='CHANGE_THIS_IS_TEMPORARY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'>
        <form onSubmit={this.handleSubmit}>
          <span>Title</span>
          <input type='text' name='title' onChange={this.handleChange}/>
          <br/>
          <span>Body</span>
          <input type='textarea' name='body' onChange={this.handleChange}/>
          <input type='submit' name='submit'/>
        </form>
        <div>
          Posts
          {
            this.props.posts.map((post, key) => (
              <div key={key}>
                <div>{post.title}</div>
                <div>{post.body}</div>
                <div>{post.dateCreated}</div>
                <div>{post.dateModified}</div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
  
}

const StyledPosts = injectSheet(PostsStyles)(PostsComponent);

const mapStateToProps = state => ({ posts: state.posts.posts });
const mapDispatchToProps = dispatch => bindActionCreators({ createEntry }, dispatch);

const ServedPosts = connect(mapStateToProps, mapDispatchToProps)(StyledPosts);
export default ServedPosts;