import React from 'react';
import { Box } from '@material-ui/core';
import { useModals } from '../../hooks/useModals';
import useStyles from './styles';

export const Image = ({ title, url, isNew }) => {
  const { handleOpenNew } = useModals();
  const classes = useStyles();
  return (
    <Box className={classes.imageContainer}>
      <p className={classes.imageTitle}>{title}</p>
      <Box
        className={classes[url]}
        onClick={isNew ? handleOpenNew : null}
      ></Box>
    </Box>
  );
};
