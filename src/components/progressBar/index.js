import React, { useEffect } from 'react';
import { LinearProgress, Box } from '@material-ui/core';
import { progressTracker } from '../../utils/progressTracker';

import useStyles from './styles';

export default function ProgressBar({ notes }) {
  const classes = useStyles();
  const { sum, progress } = progressTracker(notes);

  useEffect(() => {
    progressTracker(notes);
  }, [notes]);

  return (
    <Box className={classes.progressContainer}>
      <p
        className={classes.progressTitle}
      >{`You have ${sum} / ${notes.length} completed`}</p>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
