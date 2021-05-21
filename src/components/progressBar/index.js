import React, { useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import useStyles from './styles';

export default function ProgressBar({ notes }) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   setProgress((oldProgress) => {
    //     if (oldProgress === 100) {
    //       return 0;
    //     }
    //     const diff = Math.random() * 10;
    //     return Math.min(oldProgress + diff, 100);
    //   });
    // }, 500);
    // return () => {
    //   clearInterval(timer);
    // };
    setProgress(25);
  }, []);

  return (
    <div className={classes.progressContainer}>
      <p className={classes.progressTitle}>You have 1/4 completed</p>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}
