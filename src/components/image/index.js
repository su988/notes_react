import React from 'react';
import useStyles from './styles';

function Image({ title, url, handleOpen }) {
  const classes = useStyles();
  return (
    <div className={classes.imageContainer}>
      <p className={classes.imageTitle}>{title}</p>
      <div className={classes[url]} onClick={handleOpen}></div>
    </div>
  );
}

export default Image;
