import React from 'react';
import { string } from 'prop-types';
import injectSheet from 'react-jss';

import PageTitleStyles from './PageTitle.styles'

const PageTitleComponent = props => {
  
  const { classes, pageTitleText, pageTitlePath } = props
  
  return (
    <div className={classes.pageTitleContainer}>
      <span className={classes.pageTitle}>{pageTitleText}</span>
      <span className={classes.pagePath}>Flexbuster {pageTitlePath.split('/').join('/ ')}</span>
    </div>
  )
}

PageTitleComponent.propTypes = {
  pageTitleText: string.isRequired,
  pageTitlePath: string.isRequired
}

const PageTitleStyled = injectSheet(PageTitleStyles)(PageTitleComponent);
export default PageTitleStyled;