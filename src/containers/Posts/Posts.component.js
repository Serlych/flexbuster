import React, { Component, Fragment } from 'react';
import { object } from 'prop-types';
import uuidv4 from 'uuid/v4';
import injectSheet from 'react-jss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PageTitle from '../../components/PageTitle/PageTitle.component';
import TextareaAutosize from 'react-autosize-textarea';
import SinglePost from '../../components/PostDisplay/PostDisplay.component';
import { getDate } from '../../shared/utils/frontend.util';

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
  
  static propTypes = {
    location: object.isRequired,
    classes: object.isRequired
  }
  
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }
  
  handleSubmit = event => {
    const { createEntry } = this.props
    event.preventDefault()
    
    createEntry({
      ...this.state,
      dateCreated: getDate(),
      dateModified: getDate(),
      id: uuidv4()
    })
    
    this.setState({
      title: '',
      body: ''
    })
  }
  
  render() {
    const { title, body } = this.state
    const { location, classes } = this.props
    
    return (
      <Fragment>
        <PageTitle pageTitleText='Post Editor' pageTitlePath={location.pathname} />
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
              <TextareaAutosize name='body' value={body} onChange={this.handleChange} rows={8}/>
            </div>
            <div className={classes.postsSubmit}>
              <button type='submit' name='submit'>Post</button>
            </div>
          </form>
          <SinglePost/>
      </Fragment>
    );
  }
}

const StyledPosts = injectSheet(PostsStyles)(PostsComponent);

const mapStateToProps = state => ({ posts: state.posts.posts });
const mapDispatchToProps = dispatch => bindActionCreators({ createEntry }, dispatch);

const ReducedPosts = connect(mapStateToProps, mapDispatchToProps)(StyledPosts);
export default ReducedPosts;