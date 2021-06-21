import React from 'react';
import { LinearProgress, Box, Typography } from '@material-ui/core';
import { progressTracker } from '../../utils/progressTracker';

import useStyles from './styles';

export const ProgressBar = ({ notes }) => {
  const classes = useStyles();
  const { count, progress } = progressTracker(notes);

  return (
    <Box className={classes.progressContainer}>
      <Typography className={classes.progressTitle}>
        {`You have ${count} / ${notes.length} completed`}
      </Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};
