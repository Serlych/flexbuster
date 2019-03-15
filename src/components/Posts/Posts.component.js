import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import injectSheet from 'react-jss';

// import PostsStyles from './Posts.styles'

class PostsComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      notes:[
        {
          id: 1,
          title: 'My note 1'
        },
        {
          id: 2,
          title: 'My note 2'
        },
        {
          id: 3,
          title: 'My note 3'
        }
      ]
    };
  }
  
  renderNotes = notes => (
    <ul>
      {
        notes.map((note, key) => (
            <li key={key}>
              <Link to={`/posts/${note.id}`}>{note.title}</Link>
            </li>
          )
        )
      }
    </ul>
  );
  
  render() {
    const { notes } = this.state;
    const { match: { params: { postId }}} = this.props
    
    let selectedPost = false
  
    if (postId > 0) {
      selectedPost = notes.filter(note => note.id === Number(postId) );
    }
    
    return (
      <div className="Notes">
        <h1>Notes</h1>
        {this.renderNotes(selectedPost || notes)}
      </div>
    );
  }
  
}

// const StyledPosts = injectSheet(PostsStyles)(PostsComponent)
// export default StyledPosts;
export default PostsComponent;