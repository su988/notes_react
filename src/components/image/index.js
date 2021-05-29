import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles';

function Image({ title, url, handleOpen }) {
  const classes = useStyles();
  return (
    <Box className={classes.imageContainer}>
      <p className={classes.imageTitle}>{title}</p>
      <Box className={classes[url]} onClick={handleOpen}></Box>
    </Box>
  );
}

export default Image;
