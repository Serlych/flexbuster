const PostDisplayStyles = theme => ({
  singlePostContainer: {
    ...theme.component.container,
    display: 'grid',
    gridTemplateColumns: '80% 20%',
    gridTemplateRows: 'auto',
    gridTemplateAreas: "'singlePostTitle singlePostButtons' 'singlePostContent singlePostContent' 'singlePostDate singlePostDate'"
  },
  singlePostTitle: {
    ...theme.component.subtitle,
    gridArea: 'singlePostTitle',
    borderBottom: 'none',
    padding: 0,
    marginBottom: 0,
    textAlign: 'left',
    textTransform: 'uppercase',
  },
  singlePostEditTitle: {
    gridArea: 'singlePostTitle',
    '& input': {
      ...theme.inputElement.text,
      marginTop: 0
    }
  },
  singlePostButtons: {
    gridArea: 'singlePostButtons',
    justifySelf: 'end',
    alignSelf: 'start',
    '& i': {
      marginLeft: '1em',
      cursor: 'pointer',
      transition: theme.animation.globalTransition,
      '&: hover': {
        ...theme.animation.hoverIcon
      }
    }
  },
  singlePostContent: {
    ...theme.component.textBlock,
    gridArea: 'singlePostContent',
  },
  singlePostEditContent: {
    gridArea: 'singlePostContent',
    '& textarea': {
      ...theme.inputElement.text,
      ...theme.inputElement.textArea
    }
  },
  singlePostDate: {
    gridArea: 'singlePostDate',
    display: 'flex',
    justifyContent: 'space-between',
  },
  singlePostSubmitButton: {
    gridArea: 'singlePostDate',
    display: 'flex',
    justifyContent: 'center',
    '& button': {
      ...theme.inputElement.button
    }
  }
})

export default PostDisplayStyles;