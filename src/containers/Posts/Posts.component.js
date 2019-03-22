import React, { Component, Fragment } from 'react';
import uuidv4 from 'uuid/v4';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PageTitle from '../../components/PageTitle/PageTitle.component';
import SinglePost from '../../components/SinglePost/SinglePost.component';

import { createEntry } from '../../redux/actions/posts.action';

import PostsStyles from './Posts.styles'

class PostsComponent extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      body: '',
    }
  }
  
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }
  
  handleSubmit = event => {
    const { createEntry } = this.props
    event.preventDefault()
    
    createEntry({
      ...this.state,
      dateCreated: this.getDate(),
      dateModified: this.getDate(),
      postId: uuidv4()
    })
    
    this.setState({
      title: '',
      body: ''
    })
  }
  
  getDate = () => {
    return `${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}`
  }
  
  render() {
    const { title, body } = this.state
    const { location, classes } = this.props
    
    return (
      <Fragment>
        <PageTitle pageTitleText='Posts' pageTitlePath={location.pathname} />
          <form className={classes.postsForm} onSubmit={this.handleSubmit}>
            <div className={classes.postsCreatePostTitle}>
              Create new post
            </div>
            <div>
              Title
              <br/>
              <input type='text' name='title' value={title} onChange={this.handleChange} />
            </div>
            <div>
              Body
              <br/>
              <textarea name='body' value={body} onChange={this.handleChange} />
            </div>
            <div className={classes.postsSubmit}>
              <button type='submit' name='submit'>Post</button>
            </div>
          </form>
          <div>
            <SinglePost/>
          </div>
      </Fragment>
    );
  }
}

const StyledPosts = injectSheet(PostsStyles)(PostsComponent);

const mapStateToProps = state => ({ posts: state.posts.posts });
const mapDispatchToProps = dispatch => bindActionCreators({ createEntry }, dispatch);

const ReducedPosts = connect(mapStateToProps, mapDispatchToProps)(StyledPosts);
export default ReducedPosts;