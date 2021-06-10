import React from 'react';
import { Box } from '@material-ui/core';

import useStyles from './styles';

export const Layout = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.container}>{children}</Box>;
};
