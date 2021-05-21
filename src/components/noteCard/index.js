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
  const [checked, setChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleChange = (event) => {
    const completedNotes = notes.forEach((note) => {
      return { ...note, completed: event.target.checked };
    });

    console.log(completedNotes);
    console.log('done');
  };

  const handleDelete = () => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={checked ? classes.done : classes[category]}>
          <div className={classes.header}>
            <div className={classes.headerLeft}>
              <Checkbox
                checked={checked}
                onChange={handleChange}
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
