import React from 'react';
import Box from '@material-ui/core/Box';
import { v4 as uuidv4 } from 'uuid';
import { NoteCard } from '../../components/NoteCard';
import { Image } from '../../components/Image';
import { DeleteDialog } from '../../components/DeleteDialog';

import useStyles from './styles';

export const ListNote = ({
  notes,
  searchTerm,
  category,
  editNote,
  deleteNote,
  toggleComplete,
  handleOpen,
  setCurrentId,
  openDelete,
  onOpenDelete,
  onCloseDelete,
  id,
}) => {
  const classes = useStyles();

  const noteItems =
    notes &&
    notes
      .filter((note) => {
        return note.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          category === 'all'
          ? note
          : note.category === category;
      })
      .map((note) => {
        return (
          <NoteCard
            note={note}
            key={uuidv4()}
            editNote={editNote}
            toggleComplete={toggleComplete}
            onOpen={handleOpen}
            setCurrentId={setCurrentId}
            onOpenDelete={onOpenDelete}
            openDelete={openDelete}
            onCloseDelete={onCloseDelete}
          />
        );
      });

  return (
    <>
      {noteItems && noteItems.length === 0 ? (
        <Image title="Couldn't find any notes" url="search" />
      ) : (
        <Box className={classes.root}>
          <Box className={classes.cardContainer}>{noteItems}</Box>
          <DeleteDialog
            openDelete={openDelete}
            onOpenDelete={onOpenDelete}
            onCloseDelete={onCloseDelete}
            id={id}
            deleteNote={deleteNote}
          />
        </Box>
      )}
    </>
  );
};
