import React from 'react';
import { string } from 'prop-types';
import injectSheet from 'react-jss';

import PageTitleStyles from './PageTitle.styles'

const PageTitleComponent = props => {
  
  const { classes, pageTitleText, pageTitlePath } = props
  
  let path = pageTitlePath.split('/').join('/ ')
  path = path.replace(path.charAt(2), path.charAt(2).toUpperCase())
  
  return (
    <div className={classes.pageTitleContainer}>
      <span className={classes.pageTitle}>{pageTitleText}</span>
      <span className={classes.pagePath}>Flexbuster {path}</span>
    </div>
  )
}

PageTitleComponent.propTypes = {
  pageTitleText: string.isRequired,
  pageTitlePath: string.isRequired
}

const PageTitleStyled = injectSheet(PageTitleStyles)(PageTitleComponent);
export default PageTitleStyled;