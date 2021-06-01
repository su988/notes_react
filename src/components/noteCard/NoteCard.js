import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

import useStyles from './styles';

export const NoteCard = ({
  note: { title, description, category, date, id, completed },
  deleteNote,
  toggleComplete,
  handleOpen,
  setCurrentId,
}) => {
  const classes = useStyles();

  const handleCheck = () => {
    toggleComplete(id);
  };

  const handleEdit = () => {
    setCurrentId(id);
    handleOpen();
  };

  const handleDelete = () => {
    deleteNote(id);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={completed ? classes.done : classes[category]}>
          <Box className={classes.header}>
            <Box className={classes.headerLeft}>
              <Checkbox
                checked={completed}
                onChange={handleCheck}
                className={classes.checkbox}
              />
              <Typography variant="h5" component="h2" className={classes.title}>
                {title}
              </Typography>
            </Box>

            <CardActions className={classes.headerRight}>
              <IconButton
                disabled={completed}
                onClick={handleEdit}
                className={classes.editBtn}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                disabled={completed}
                onClick={handleDelete}
                className={classes.deleteBtn}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Box>

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
};
