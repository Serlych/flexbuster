import React from 'react';
import { element } from 'prop-types';
import injectSheet from 'react-jss';

import ContentStyles from './Content.styles';

const ContentComponent = props => {
  const { classes, children } = props
  
  return (
    <main className={classes.contentContainer}>
      {children}
    </main>
  )
}

ContentComponent.propTypes = {
  children: element
}

const StyledContent = injectSheet(ContentStyles)(ContentComponent);
export default StyledContent;