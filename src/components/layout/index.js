import React from 'react';
import { Box } from '@material-ui/core';

import useStyles from './styles';

function Layout({ children }) {
  const classes = useStyles();
  return <Box className={classes.container}>{children}</Box>;
}

export default Layout;
