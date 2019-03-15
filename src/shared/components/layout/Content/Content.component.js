import React from 'react';
import { element } from 'prop-types';
// import injectSheet from 'react-jss';

// import ContentStyles from './Content.styles';

const ContentComponent = props => {
  const { children } = props
  return (
    <main>
      {children}
    </main>
  )
}

ContentComponent.propTypes = {
  children: element
}

// const StyledContent = injectSheet()
// export default StyledContent;
export default ContentComponent;