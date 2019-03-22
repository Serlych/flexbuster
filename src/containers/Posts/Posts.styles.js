const PostsStyles = theme => ({
  postsForm: {
    ...theme.component.container,
    '& input': {
      ...theme.inputElement.text
    },
    '& textarea': {
      ...theme.inputElement.text,
      ...theme.inputElement.textArea
    },
    '& button': {
      ...theme.inputElement.button
    }
  },
  postsCreatePostTitle: {
    ...theme.component.subtitle
  },
  postsSubmit: {
    display: 'flex',
    justifyContent: 'center'
  }
})

export default PostsStyles;