import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormModal from '../formModal';
import EditNoteForm from '../editNoteForm';

import useStyles from './styles';

function NoteCard({
  note: { title, description, category, date, id, completed },
  setNotes,
  notes,
}) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  // const [checked, setChecked] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleCheck = (event) => {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, completed: !note.completed };
        }
        return note;
      }),
    );
  };

  const handleDelete = () => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={completed ? classes.done : classes[category]}>
          <div className={classes.header}>
            <div className={classes.headerLeft}>
              <Checkbox
                checked={completed}
                onChange={handleCheck}
                className={classes.checkbox}
              />
              <Typography variant="h5" component="h2" className={classes.title}>
                {title}
              </Typography>
            </div>

            <CardActions className={classes.headerRight}>
              <IconButton onClick={handleOpen} className={classes.editBtn}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={handleDelete} className={classes.deleteBtn}>
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
        <FormModal
          openModal={openModal}
          handleClose={handleClose}
          title="Update Note"
        >
          <EditNoteForm
            handleClose={handleClose}
            title={title}
            description={description}
            category={category}
            id={id}
            notes={notes}
            setNotes={setNotes}
          />
        </FormModal>
      </Card>
    </>
  );
}

export default NoteCard;
