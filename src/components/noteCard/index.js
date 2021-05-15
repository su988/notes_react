import React from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles';

function NoteCard({
  note: { title, description, category, date },
  handleOpen,
}) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes[category]}>
          <div className={classes.header}>
            <Typography variant="h5" component="h2" className={classes.title}>
              {title}
            </Typography>
            <CardActions className={classes.actionContainer}>
              <IconButton onClick={handleOpen}>
                <EditIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </div>

          <Typography
            variant="body2"
            component="p"
            className={classes.desctiption}
          >
            {description}
          </Typography>

          <Typography variant="body2" component="p" className={classes.date}>
            {date}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default NoteCard;
