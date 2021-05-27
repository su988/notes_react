import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import useStyles from './styles';

export default function ProgressBar({ notes }) {
  const classes = useStyles();

  // TODO: hooks are one thing but also introduce utils.js
  // don't keep these functions in components
  // we'll unit test these functions later on and it will be much easier if they're extracted to utils
  // import { sum , progress } from './utils'
  const sum = notes.reduce((sum, note) => {
    if (note.completed) {
      return sum + 1;
    } else {
      return 0;
    }
  }, 0);
  const progress = Math.round((sum / notes.length) * 100);

  return (
    <div className={classes.progressContainer}>
      <p
        className={classes.progressTitle}
      >{`You have ${sum} / ${notes.length} completed`}</p>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}
