import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { progressTracker } from '../../utils/progressTracker';

import useStyles from './styles';

export default function ProgressBar({ notes }) {
  const classes = useStyles();
  const { sum, progress } = progressTracker(notes);

  return (
    <div className={classes.progressContainer}>
      <p
        className={classes.progressTitle}
      >{`You have ${sum} / ${notes.length} completed`}</p>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}
