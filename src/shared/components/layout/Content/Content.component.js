import React from 'react';
import { element } from 'prop-types';

const Content = props => {
  const { children } = props
  return (
    <main>
      {children}
    </main>
  )
}

Content.propTypes = {
  children: element
}

export default Content;